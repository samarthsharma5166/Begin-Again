const { prisma } =  require("../db/db.js");

const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const ExcelJS = require("exceljs");

const addAdmin = async (req, res) => {
    const { name, email } = await req.body;
    try {
        if (!name && !email) {
            throw new Error("Name and email are required")
        }

        const admin = await prisma.admin.create({
            data: {
                name: name,
                email: email
            }
        })
        res.json({
            success: true,
            admin
        });
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

 const verifyToken = async (req, res) => {
    try {
        // Get token from Authorization header
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ error: "No token provided" });
        }

        const token = authHeader.split(" ")[1];

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Check if admin exists
        const admin = await prisma.admin.findUnique({
            where: { id: decoded.id },
        });

        if (!admin) {
            return res.status(401).json({ error: "Admin not found" });
        }

        // Optionally, return some basic info
        res.json({ success: true, admin: { id: admin.id, name: admin.name, email: admin.email, role: admin.role } });
    } catch (err) {
        console.error(err);
        res.status(401).json({ error: "Invalid or expired token" });
    }
};

const sendOTP =  async (req, res) => {
    const { email } = req.body;
    try {
        const userExists = await prisma.admin.findUnique({
            where: {
                email
            }
        })
        if (!userExists) {
            return res.status(404).json({ error: "Admin not found" });
        }
        const otp = Math.floor(100000 + Math.random() * 900000);
        const otpExpiry = new Date();
        otpExpiry.setMinutes(otpExpiry.getMinutes() + 5);
        await prisma.admin.update({
            where: {
                email
            },
            data: {
                otp: otp.toString(),
                otpExpiry
            }
        });

        console.log(process.env.EMAIL_USER,process.env.EMAIL_PASS)
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true, // MUST be true for 465
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });


        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Your OTP for Admin Login',
            text: `Your OTP is ${otp}`
        };

        await transporter.sendMail(mailOptions);

        res.json({ success: true, message: "OTP sent to your email" });
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: err.message })
    }
}

const verifyOTP =  async (req, res) => {
    const { email, otp } = req.body;
    try {
        const admin = await prisma.admin.findUnique({
            where: {
                email
            }
        });

        if (!admin) {
            return res.status(404).json({ error: "Admin not found" });
        }

        if(admin.role !== "ADMIN" ){
            return res.status(400).json({ error: "You Do not have permission" });
        }

        if (admin.otp !== otp || admin.otpExpiry < new Date()) {
            return res.status(400).json({ error: "Invalid or expired OTP" });
        }

         const token = jwt.sign({ id: admin.id,role:admin.role }, process.env.JWT_SECRET, {
            expiresIn: '1h'
        });

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict'
        });

        res.json({ success: true,token, message: "Logged in successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const getBookings = async (req, res) => {
    try {
        if(req.user.role !== "ADMIN"){
            return res.status(400).json({ error: "You Do not have permission" });
        }
        const bookings = await prisma.booking.findMany({
            orderBy: { createdAt: "desc" }
        })
        res.json(bookings)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

const exportBookings =  async (req, res) => {

    
    const bookings = await prisma.booking.findMany({
        orderBy: { createdAt: "desc" }
    })

    const workbook = new ExcelJS.Workbook()
    const sheet = workbook.addWorksheet("Registrations")

    sheet.columns = [
        { header: "Name", key: "fullName", width: 25 },
        { header: "Email", key: "email", width: 30 },
        { header: "Phone", key: "phone", width: 15 },
        { header: "Age", key: "age", width: 10 },
        { header: "Gender", key: "gender", width: 15 },
        { header: "Therapeutic Consent", key: "agreementTherapeutic", width: 20 },
        { header: "Recording Consent", key: "agreementRecording", width: 20 },
        { header: "Registered At", key: "createdAt", width: 25 }
    ]

    bookings.forEach(b => {
        sheet.addRow({
            ...b,
            createdAt: new Date(b.createdAt).toLocaleString()
        })
    })

    res.setHeader(
        "Content-Type",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    )
    res.setHeader(
        "Content-Disposition",
        "attachment; filename=event-registrations.xlsx"
    )

    await workbook.xlsx.write(res)
    res.end()
}

const logout = (req, res) => {
    res.cookie("token", null, {
        secure: true,
        maxAge: 0,
        httpOnly: true
    })

    res.status(200).json({
        success: true,
        message: 'logout successfully'
    })
}


module.exports = {
    addAdmin,
    sendOTP,
    verifyOTP,
    getBookings,
    exportBookings,
    logout,
    verifyToken
}
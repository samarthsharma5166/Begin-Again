const { prisma } = require("../db/db.js")

const { PayData } = require("../payu.config.js")
const crypto = require("crypto")

const getPayment = async (req, res) => {
    try {
        const txn_id = 'PAYU_MONEY_' + Math.floor(Math.random() * 8888888)
        const { fullName, email, phone, age, gender, agreementTherapeutic, agreementRecording } = req.body

        const EARLY_BIRD_CUTOFF = new Date("2026-01-31T18:29:59.999Z")
        const ORIGINAL_AMOUNT = 3999
        const EARLY_BIRD_AMOUNT = 2999

        const now = new Date()

        const isEarlyBird = now <= EARLY_BIRD_CUTOFF
        const amount = isEarlyBird ? EARLY_BIRD_AMOUNT : ORIGINAL_AMOUNT

        let product = JSON.stringify({
            name: 'Begin Again Booking',
            price: 3999
        })

        const booking = await prisma.booking.create({
            data: {
                fullName,
                email,
                phone,
                age:Number(age),
                gender,
                agreementTherapeutic,
                agreementRecording
            }
        });

        let udf1 = ''
        let udf2 = ''
        let udf3 = ''
        let udf4 = ''
        let udf5 = ''

        const hashString = `${PayData.payu_key}|${txn_id}|${amount}|${JSON.stringify(product)}|${fullName}|${email}|${udf1}|${udf2}|${udf3}|${udf4}|${udf5}||||||${PayData.payu_salt}`;
        // console.log(hashString);

        // Calculate the hash
        const hash = crypto.createHash('sha512').update(hashString).digest('hex');

        await prisma.payment.create({
            data: {
                txnId: txn_id,
                amount,
                status: "PENDING",
                bookingId: booking.id
            }
        })


        const data = await PayData.payuClient.paymentInitiate({
            isAmountFilledByCustomer: false,
            txnid: txn_id,
            amount: amount,
            currency: 'INR',
            productinfo: JSON.stringify(product),
            firstname: fullName,
            email: email,
            phone: phone,
            surl: `${process.env.FRONTEND_URL || "http://localhost:3000"}/payment/${txn_id}`,
            furl: `${process.env.FRONTEND_URL || "http://localhost:3000"}/payment/${txn_id}`,
            hash
        })
        res.send(data)
    } catch (error) {
        res.status(400).send({
            msg: error.message,
            stack: error.stack
        })
    }
}

const verifyPayment = async (req, res) => {
    const txnid = req.params.txnid
    const verified_Data = await PayData.payuClient.verifyPayment(txnid);
    const data = verified_Data.transaction_details[txnid]


    const status = data.status === "success" ? "SUCCESS" : "FAILED"

    await prisma.payment.update({
        where: { txnId: txnid },
        data: {
            status,
            method: data.mode,
            error: data.error_Message || null
        }
    })


    res.send({
        status: data.status,
        amt: data.amt,
        txnid: data.txnid,
        method: data.mode,
        error: data.error_Message,
        created_at: new Date(data.addedon).toLocaleString()
    })
}

module.exports = {
    getPayment,
    verifyPayment
}
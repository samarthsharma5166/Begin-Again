require("colors")
require("dotenv").config({
    path: './.env'
})
const express = require("express")

const app = express()
const port = process.env.PORT || 4500
const cors = require("cors")
const cookieParser = require("cookie-parser");


const paymentRoutes = require("./routes/payments.routes.js")
const adminRoutes = require("./routes/admin.routes.js")


// app.use(
//     cors({
//         origin: "https://beginagain.inspiredliving.in",  // frontend domain
//         methods: ["GET", "POST", "PUT", "DELETE"],
//         credentials: true
//     })
// );
// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser());
app.use(
    cors({
        origin: process.env.FRONTEND_URL || "http://localhost:3000",
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true
    })
);

app.use("/test",(req,res)=>{
    res.send("hello world");
})
// Payment Routes ✅
app.use("/api/v1/payment",paymentRoutes)

// Admin Routes ✅
app.use("/api/v1/admin",adminRoutes)


// run the application
app.listen(port, () => {
    console.log(`the app is listen at http://localhost:${port}`.bgCyan.white);

})
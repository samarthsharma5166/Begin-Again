const express = require('express');
const { addAdmin, sendOTP, verifyOTP, getBookings, exportBookings, logout } = require('../controllers/admin.controllers.js');
const isAuth = require('../middleware/auth.js');
const router = express.Router();

router.post("/add", addAdmin)

router.post("/login", sendOTP)

router.post("/verify", verifyOTP);


router.get("/bookings",isAuth ,getBookings)

router.get("/bookings/export",isAuth ,exportBookings)

router.get("/logout",isAuth ,logout)

module.exports = router;
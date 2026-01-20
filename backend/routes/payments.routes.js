const express = require('express');
const { getPayment, verifyPayment } = require('../controllers/payment.controllers.js');

const router = express.Router();

router.post("/get-payment",getPayment)
router.post("/verify/:txnid", verifyPayment)

module.exports = router;
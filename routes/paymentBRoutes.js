const express = require("express");
const { isSignedIn, isAuthenticated } = require("../controllers/auth");
const { getToken, processPayment } = require("../controllers/paymentB");
const router = express.Router();

router.get("/payment/gettoken/:userId", isSignedIn, getToken); //isAuthenticated is here but with BUG
router.post(
  "/payment/braintree/:userId",
  isSignedIn,
  isAuthenticated,
  processPayment
);

module.exports = router;

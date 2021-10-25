var express = require("express");
var router = express.Router();
const { check } = require("express-validator");
const { signout, signup, signin, isSignedIn } = require("../controllers/auth");

router.get("/signout", signout);
router.post(
  "/signup",
  [
    check("name")
      .isLength({ min: 3 })
      .withMessage("must be at least 3 chars long"),
    check("email").isEmail().withMessage("Email is required"),
    check("password").isLength({ min: 5 }).withMessage("Minimum 5 char"),
  ],
  signup
);

router.post(
  "/signin",
  [
    check("email").isEmail().withMessage("Email is required"),
    check("password").isLength({ min: 5 }).withMessage("Password is required!"),
  ],
  signin
);

router.get("/testroute", isSignedIn, (req, res) => {
  res.send("this is protected!");
});

module.exports = router;

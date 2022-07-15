const mongoose = require("mongoose");
const { Schema } = mongoose;
// const { createHmac } = import("crypto");
const crypto = require("crypto");

// const v1 = require("uuid");
// const uuidv1 = v1;

const { v1: uuidv1 } = require("uuid");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 32,
      trim: true,
    },
    lastname: {
      type: String,
      required: false,
      maxlength: 32,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    userinfo: {
      type: String,
      trim: true,
    },
    encry_password: {
      type: String,
      required: false,
    },
    salt: String,
    role: {
      type: Number,
      default: 0,
    },
    purchases: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

userSchema
  .virtual("password")
  .get(function () {
    return this._password;
  })
  .set(function (password) {
    this._password = password;
    this.salt = uuidv1();
    this.encry_password = this.securePassword(password);
  });

userSchema.method({
  authenticate: function (plainpassword) {
    return this.securePassword(plainpassword) === this.encry_password;
  },

  securePassword: function (plainpassword) {
    if (!plainpassword) return "";
    try {
      const hash = crypto
        .createHmac("sha256", this.salt)
        .update(plainpassword)
        .digest("hex");
      return hash;
    } catch (err) {
      console.log(err);
      return "";
    }
  },
});

module.exports = mongoose.model("User", userSchema);

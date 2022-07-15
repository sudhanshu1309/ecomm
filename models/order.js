// import mongoose from "mongoose";
const mongoose = require("mongoose");
const { Schema, ObjectId } = mongoose;

const ProductCartSchema = new Schema({
  product: {
    type: ObjectId,
    ref: "Product",
  },
  name: String,
  count: Number,
  price: Number,
});

const OrderSchema = new Schema(
  {
    products: [ProductCartSchema],
    transaction_id: {},
    amount: {
      type: Number,
    },
    address: String,
    status: {
      type: String,
      default: "Received",
      enum: ["Cancelled", "Delivered", "Shipped", "Processing", "Received"],
    },
    updated: Date,
    user: {
      type: ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const ProductCart = mongoose.model("ProductCart", ProductCartSchema);
const Order = mongoose.model("Order", OrderSchema);

module.exports = { ProductCart, Order };

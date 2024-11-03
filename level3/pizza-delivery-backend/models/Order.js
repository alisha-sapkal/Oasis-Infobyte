const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  pizza: { type: mongoose.Schema.Types.ObjectId, ref: "Pizza" },
  status: {
    type: String,
    enum: ["Order Received", "In Kitchen", "Sent to Delivery"],
    default: "Order Received",
  },
});

module.exports = mongoose.model("Order", orderSchema);

const Order = require("../models/Order");

const createOrder = async (req, res) => {
  const order = new Order(req.body);
  await order.save();
  res.status(201).json(order);
};

const updateOrderStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const order = await Order.findByIdAndUpdate(id, { status }, { new: true });
  res.json(order);
};

const getOrders = async (req, res) => {
  const orders = await Order.find();
  res.json(orders);
};

module.exports = { createOrder, updateOrderStatus, getOrders };

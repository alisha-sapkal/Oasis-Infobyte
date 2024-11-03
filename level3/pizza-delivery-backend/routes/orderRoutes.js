const express = require("express");
const { createOrder, updateOrderStatus, getOrders } = require("../controllers/orderController");

const router = express.Router();

router.post("/", createOrder);
router.put("/:id", updateOrderStatus);
router.get("/", getOrders);

module.exports = router;

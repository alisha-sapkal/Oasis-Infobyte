const express = require("express");
const { getPizzas, addPizza } = require("../controllers/pizzaController");

const router = express.Router();

router.get("/", getPizzas);
router.post("/", addPizza);

module.exports = router;

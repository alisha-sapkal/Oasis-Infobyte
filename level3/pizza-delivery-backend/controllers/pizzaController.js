const Pizza = require("../models/Pizza");

const getPizzas = async (req, res) => {
  const pizzas = await Pizza.find();
  res.json(pizzas);
};

const addPizza = async (req, res) => {
  const pizza = new Pizza(req.body);
  await pizza.save();
  res.status(201).json(pizza);
};

module.exports = { getPizzas, addPizza };

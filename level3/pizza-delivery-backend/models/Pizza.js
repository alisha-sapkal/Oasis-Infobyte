const mongoose = require("mongoose");

const pizzaSchema = new mongoose.Schema({
  base: String,
  sauce: String,
  cheese: String,
  veggies: [String],
  meat: [String],
});

module.exports = mongoose.model("Pizza", pizzaSchema);

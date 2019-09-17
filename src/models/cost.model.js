const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CostSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  price: Number,
  currency: String,
  categories: String,
}, { timestamps: true });

const CostModel = mongoose.model("Costs", CostSchema);

module.exports = CostModel;

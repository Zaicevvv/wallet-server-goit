const CostModel = require('../../models/cost.model.js');

const getAllCosts = async (req, res) => {

  try {
    const allCosts = await CostModel.find({}, { '__v': 0 });
    res.json({
      status: "OK",
      costs: allCosts
    })
  } catch (error) {
    res.status(400).json({
      status: "BAD",
      error: error,
      message: error.message
    })
  }
};

module.exports = getAllCosts;

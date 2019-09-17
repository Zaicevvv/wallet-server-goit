const CostModel = require('../../models/cost.model.js');

const getCostById = async (req, res) => {
  const costId = req.params.costId;

  try {
    const cost = await CostModel.findById(costId, { '__v': 0 });
    res.json({
      status: "OK",
      cost: cost
    })
  } catch (error) {
    res.status(400).json({
      status: "BAD",
      error: error,
      message: error.message
    })
  }
};

module.exports = getCostById;

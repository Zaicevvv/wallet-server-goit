const CostModel = require('../../models/cost.model.js');

const deleteCost = async (req, res) => {
  const costId = req.params.costId;

  try {
    const deletedCost = await CostModel.findByIdAndDelete(costId);
    res.json({
      status: "OK",
      deletedCost: deletedCost
    })
  } catch (error) {
    res.status(400).json({
      status: "BAD",
      error: error,
      message: error.message
    })
  }
};

module.exports = deleteCost;

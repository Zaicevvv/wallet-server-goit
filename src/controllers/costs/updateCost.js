const CostModel = require('../../models/cost.model.js');

const updateCost = async (req, res) => {
  const costId = req.params.costId;
  const updatedData = req.body;

  try {
    const updatedCost = await CostModel.findByIdAndUpdate(costId, { $push: updatedData });
    res.json({
      status: "OK",
      cost: updatedCost
    })
  } catch (error) {
    res.status(400).json({
      status: "BAD",
      error: error,
      message: error.message
    })
  }
};

module.exports = updateCost;

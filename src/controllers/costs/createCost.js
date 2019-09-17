const CostModel = require('../../models/cost.model.js');

const createCost = async (req, res) => {
  const newCostData = req.body;

  try {
    const newCost = await new CostModel(newCostData);

    newCost.save((err, result) => {
      res.json({
        status: "OK",
        cost: result
      })
    });

  } catch (error) {
    res.status(400).json({
      status: "BAD",
      error: error,
      message: error.message
    })
  }
};

module.exports = createCost;

const router = require('express').Router();
const costsControllers = require('../../controllers/costs');

router.post('/', costsControllers.createCost);
router.get('/', costsControllers.getAllCosts);
router.get('/:costsId', costsControllers.getCostById);
router.patch('/:costsId', costsControllers.updateCost);
router.delete('/:costsId', costsControllers.deleteCost);

module.exports = router;

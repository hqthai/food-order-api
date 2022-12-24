const FoodController = require('../controllers/FoodController')
var express = require('express')
var router = express.Router()

router.get('/:id', FoodController.getFoodsByStoreID)

// router.get('/', OrderController.getOrders)
// router.post('/', OrderController.addOrder)

module.exports = router;
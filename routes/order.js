const OrderController = require('../controllers/OrderController')
var express = require('express')
var router = express.Router()

router.get('/:id', OrderController.getOrdersByPartnerId)

router.get('/', OrderController.getOrders)
router.post('/', OrderController.addOrder)

module.exports = router;
const OrderController = require('../controllers/OrderController')
var express = require('express')
var router = express.Router()

router.get('/:id', OrderController.getOrdersByCustomerId)

router.get('/detail/:id', OrderController.getOrderDetail)
// router.post('/', OrderController.addOrder)

module.exports = router;
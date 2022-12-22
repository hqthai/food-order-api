const StoreController = require('../controllers/StoreController')
var express = require('express')
var router = express.Router()

router.get('/:id', StoreController.getStroresByPartnerId)

router.get('/', StoreController.getStores)
router.post('/', StoreController.addStore)

module.exports = router;
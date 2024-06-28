const express = require('express')
const router = express.Router()
const CartController = require('../Controller/CartController')
const mw = require('../mw/auth')






router.post('/CartPost', mw.auth, CartController.CartPost)
router.get('/CartGet', CartController.CartGet)
router.get('/CartGetByUserId', mw.auth, CartController.CartGetByUserId)
router.get('/CartGetByCartId', CartController.CartGetByCartId)
router.get('/CartGetByProductId', CartController.CartGetByProductId)



module.exports = router

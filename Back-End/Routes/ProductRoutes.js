const express = require('express')
const router = express.Router()
const ProductController = require('../Controller/ProductController')

router.post('/insert', ProductController.insertProduct)
router.get('/get/:category_id/:sub_category', ProductController.getProduct)
router.get('/getCategory', ProductController.getCategory)
router.get('/getProducts', ProductController.getProducts)
router.get('/getProductById/:product_id', ProductController.getProductById)





module.exports = router
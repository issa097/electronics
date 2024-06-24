const express = require('express')
const router = express.Router()
const CategoryController = require('../Controller/CategoryController')


router.post('/insertCategory', CategoryController.insertCategory)
router.post('/insertSubCategory', CategoryController.insertSubCategory)
router.get('/cat', CategoryController.getCategory)

module.exports = router

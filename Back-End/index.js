const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser');

const UserRouters = require('./Routes/UserRouters')
const ProductRouters = require('./Routes/ProductRoutes')
const CategoryRouters = require('./Routes/CategoryRoutes')
const CartRouters = require('./Routes/CartRoutes')

app.use(bodyParser.json())
app.use(express.json())
app.use(cors())
app.use(UserRouters)
app.use(ProductRouters)
app.use(CategoryRouters)
app.use(CartRouters)




module.exports = app

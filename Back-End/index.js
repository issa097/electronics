const express = require('express')
const app = express()
const cors = require('cors')

const UserRouters = require('./Routes/UserRouters')


app.use(express.json())
app.use(cors())
app.use(UserRouters)



module.exports = app

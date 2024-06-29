const express = require('express')
const router = express.Router()
const auth = require('../mw/auth')


const UserController = require('../Controller/UserController')

router.post('/register', UserController.Register)
router.post('/login', UserController.Login)
router.get('/getUser', auth.auth, UserController.getUser)
router.get('/getUsers', UserController.getUsers)
router.put('/deleteUser/:user_id', UserController.deleteUsers)


module.exports = router
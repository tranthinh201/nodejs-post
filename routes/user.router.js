const express = require('express')
const Router = express.Router()

const userController = require('../controller/user.controller')

Router.get('/', userController.getAll)

module.exports = Router
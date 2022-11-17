const express = require('express')
const Router = express.Router()


const postsController = require("../controller/posts.controller")

Router.get('/', postsController.getAll)
Router.get('/:id', postsController.getById)
Router.post('/', postsController.create)
Router.put('/:id', postsController.update)
Router.delete('/:id', postsController.delete)
module.exports = Router


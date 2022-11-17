const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT
const postsRouter = require('./routes/post.router')
const userRouter = require('./routes/user.router')
app.use(express.urlencoded({
    extended: false
}))
app.use(express.json())


app.use('/api/v1/posts', postsRouter)
app.use('/api/v1/user', userRouter)
app.listen(PORT, () => {
    console.log(`Server running port ${PORT}`)
})
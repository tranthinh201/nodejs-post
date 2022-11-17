const pool = require('../database/index')
const postsController = {
    getAll: async(req, res, next) => {
        try {
            const [rows, fields] = await pool.query("SELECT * FROM posts")
            res.json({
                data: rows
            })
        } catch(err) {
            console.log(err)
            res.json({
                state: "error" 
            })
        }
    },
    getById: async(req, res, next) => {
        try {
            const id = req.params.id 
            const [rows, fields] = await pool.query("SELECT * FROM posts WHERE id = ?", [id])
            res.json({
                data: rows
            })
            console.log(rows)
        } catch(err) {
            res.json({
                state: "error" 
            })
        }
    },
    create: async (req, res) => {
        try {
            const {title, content} = req.body
            const SQL = "INSERT INTO posts(title, content) VALUES(? , ?)"
            const [rows, fields] = await pool.query(SQL, [title, content])
            res.json({
                data: fields
            })
    
        } catch(err) {
            res.json({
                state: "error" 
            })
        }
    },

    update: async (req, res) => {
        try {
            const {title, content} = req.body
            const id = req.params.id
            const SQL = "UPDATE posts SET title = ?, content = ? WHERE id = ?"
            const [rows, fields] = await pool.query(SQL, [title, content, id])
            res.json({
                data: rows
            })
    
        } catch(err) {
            res.json({
                state: "error" 
            })
        }
    },
    delete: async (req, res) => {
        try {
            const id = req.params.id
            const SQL = "DELETE FROM posts WHERE id = ?"
            const [rows, fields] = await pool.query(SQL, [id])
            res.json({
                data: rows
            })
        } catch(err) {
            res.json({
                state: "error"
            })
        }
    }
}

module.exports = postsController
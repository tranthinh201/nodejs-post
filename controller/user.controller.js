const { models } = require('mongoose')
const pool = require('../database/index')

const userController = {
    getAll: async (req, res) => {
        try {
            const query = "SELECT * FROM user"
            const [rows, fields] = await pool.query(query)
            res.json({
                data: rows
            })
        } catch (error) {
            res.status(500).json({
                message: error
            })
        }
    }
}

module.exports = userController
const TodoModel = require('../models/todo')

module.exports = async (req, res) => {
    const todos = await TodoModel.find()
    res.json(todos)
}
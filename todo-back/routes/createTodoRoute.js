const TodoModel = require('../models/todo')

module.exports = async (req, res) => {
    const { task } = req.body
    const todo = new TodoModel({
        task,
    })
    const newTodo = await todo.save()
    res.json(newTodo)
}
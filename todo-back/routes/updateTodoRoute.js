const TodoModel = require('../models/todo')

module.exports = async (req, res) => {
    const {id} = req.params;
    const todo = await TodoModel.findById(id)
    todo.status = req.body.status
    todo.task = req.body.task
    await todo.save();
    res.json(todo)
}
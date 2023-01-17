const express = require('express')
const loggedIn = require('./middleware/login')
const router = express.Router()

const createTodoRoute = require('./routes/createTodoRoute')
const readTodosRoute = require('./routes/readTodosRoute')
const updateTodoRoute = require('./routes/updateTodoRoute')
const deleteTodoRoute = require('./routes/deleteTodoRoute')

router.post("/login", require('./routes/loginRoute'))

router.post("/todos", loggedIn, createTodoRoute)
router.get("/todos", loggedIn, readTodosRoute)
router.put('/todos/:id', loggedIn, updateTodoRoute)
router.delete('/todos/:id', loggedIn, deleteTodoRoute)

module.exports = router;
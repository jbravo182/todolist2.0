const mongoose = require("mongoose") // requiring the mongoose package

const todoSchema = new mongoose.Schema({
  // creating a schema for todo
    task: {
    // field2: task
    type: String,
    unique: true, // task is a string
    required: true // it is required
  },
  status: {
    // field3: task status
    type: Boolean, // it is a boolean
    default: false // the default is false
  }
})

const todoModel = mongoose.model("Todo", todoSchema) // creating the model from the schema

module.exports = todoModel // exporting the model
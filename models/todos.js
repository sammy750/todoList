const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  userId: {
    type: Number,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  body: {
    type: String,
    
  },
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
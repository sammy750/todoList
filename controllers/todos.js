const Todo = require("../models/todos");

exports.getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    console.error("Error fetching todos:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.createTodo = async (req, res) => {
  const { title, userId, completed, body } = req.body;
  try {
    const newTodo = await Todo.create({ title, userId, completed, body });
    res.status(201).json(newTodo);
  } catch (error) {
    console.error("Error creating todo:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getTodoById = async (req, res) => {
  const todoId = req.params.id;
  try {
    const todo = await Todo.findById(todoId);
    if (todo) {
      res.json(todo);
    } else {
      res.status(404).json({ message: "Todo not found" });
    }
  } catch (error) {
    console.error("Error fetching todo:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.updateTodo = async (req, res) => {
  const todoId = req.params.id;
  const { title, userId, completed, body } = req.body;
  try {
    const todo = await Todo.findByIdAndUpdate(
      todoId,
      { title,userId, completed , body},
      { new: true }
    );
    if (todo) {
      res.json(todo);
    } else {
      res.status(404).json({ message: "Todo not found" });
    }
  } catch (error) {
    console.error("Error updating Todo:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.deleteTodo = async (req, res) => {
  const todoId = req.params.id;
  try {
    const todo = await Todo.findByIdAndDelete(todoId);
    if (todo) {
      res.sendStatus(204);
    } else {
      res.status(404).json({ message: "Todo not found" });
    }
  } catch (error) {
    console.error("Error deleting todo:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
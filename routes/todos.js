const express = require('express');
const router = express.Router();
const todoControllers = require('../controllers/todos');

// GET /api/todo
router.get('/', todoControllers.getAllTodos);

// POST /api/todo
router.post('/', todoControllers.createTodo);

// GET /api/todo/:id
router.get('/:id', todoControllers.getTodoById);

// PUT /api/todo/:id
router.put('/:id', todoControllers.updateTodo);

// DELETE /api/todo/:id
router.delete('/:id', todoControllers.deleteTodo);

module.exports = router;
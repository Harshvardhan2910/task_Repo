const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

// In-memory task storage
let tasks = [];

// Validation middleware
const validateTask = (req, res, next) => {
  const { title } = req.body;
  if (!title || title.trim() === '') {
    return res.status(400).json({ message: 'Title is required' });
  }
  next();
};

// GET all tasks
router.get('/', (req, res) => {
  res.json(tasks);
});

// CREATE a new task
router.post('/', validateTask, (req, res) => {
  const { title, description, completed = false } = req.body;
  
  const newTask = {
    id: uuidv4(),
    title,
    description,
    completed,
    createdAt: new Date(),
    updatedAt: new Date()
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

// UPDATE a task
router.put('/:id', validateTask, (req, res) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;
  
  const taskIndex = tasks.findIndex(task => task.id === id);
  
  if (taskIndex === -1) {
    return res.status(404).json({ message: 'Task not found' });
  }

  tasks[taskIndex] = {
    ...tasks[taskIndex],
    title,
    description,
    completed,
    updatedAt: new Date()
  };

  res.json(tasks[taskIndex]);
});

// DELETE a task
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  
  const initialLength = tasks.length;
  tasks = tasks.filter(task => task.id !== id);

  if (tasks.length === initialLength) {
    return res.status(404).json({ message: 'Task not found' });
  }

  res.status(204).send();
});

module.exports = router;
const Task = require('../models/Task');

class TaskController {
  constructor() {
    this.tasks = [];
  }

  getAllTasks() {
    return this.tasks;
  }

  createTask(title, description) {
    const id = this.tasks.length + 1;
    const newTask = new Task(id, title, description);
    this.tasks.push(newTask);
    return newTask;
  }

  updateTask(id, updates) {
    const taskIndex = this.tasks.findIndex(task => task.id === parseInt(id));
    if (taskIndex === -1) return null;

    this.tasks[taskIndex] = { 
      ...this.tasks[taskIndex], 
      ...updates 
    };
    return this.tasks[taskIndex];
  }

  deleteTask(id) {
    const taskIndex = this.tasks.findIndex(task => task.id === parseInt(id));
    if (taskIndex === -1) return false;

    this.tasks.splice(taskIndex, 1);
    return true;
  }
}

module.exports = new TaskController();
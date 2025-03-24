const Task = require('./Task');

class TaskController {
  constructor() {
    this.tasks = [];
  }

  getAllTasks() {
    return this.tasks;
  }

  getTaskById(id) {
    return this.tasks.find(task => task.id === id);
  }

  createTask(title, description) {
    const newTask = new Task(title, description);
    this.tasks.push(newTask);
    return newTask;
  }

  updateTask(id, updates) {
    const task = this.getTaskById(id);
    if (!task) return null;
    
    task.update(updates);
    return task;
  }

  deleteTask(id) {
    const index = this.tasks.findIndex(task => task.id === id);
    if (index === -1) return false;
    
    this.tasks.splice(index, 1);
    return true;
  }
}

module.exports = new TaskController();
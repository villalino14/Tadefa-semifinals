// controllers/taskController.js
const tasks = require("../models/taskModel");

// Get all tasks
const getAllTasks = async (req, res) => {
  try {
    res.status(200).json({ message: "Tasks retrieved successfully", data: tasks });
  } catch (error) {
    res.status(500).json({ message: "An error occurred", error: error.message });
  }
};

// Get a specific task by ID
const getTaskById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const task = tasks.find((task) => task.id === id);
    if (task) {
      res.status(200).json({ message: "Task retrieved successfully", data: task });
    } else {
      res.status(404).json({ message: "Task not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "An error occurred", error: error.message });
  }
};

// Add a new task
const addTask = async (req, res) => {
  try {
    const newTask = req.body;
    tasks.push(newTask);
    res.status(201).json({ message: "Task added successfully", data: tasks });
  } catch (error) {
    res.status(500).json({ message: "An error occurred", error: error.message });
  }
};

// Update an existing task
const updateTask = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const index = tasks.findIndex((task) => task.id === id);
    if (index !== -1) {
      tasks[index] = { ...tasks[index], ...req.body };
      res.status(200).json({ message: "Task updated successfully", data: tasks });
    } else {
      res.status(404).json({ message: "Task not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "An error occurred", error: error.message });
  }
};

// Delete a task
const deleteTask = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const index = tasks.findIndex((task) => task.id === id);
    if (index !== -1) {
      tasks.splice(index, 1);
      res.status(200).json({ message: "Task deleted successfully", data: tasks });
    } else {
      res.status(404).json({ message: "Task not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "An error occurred", error: error.message });
  }
};

module.exports = {
  getAllTasks,
  getTaskById,
  addTask,
  updateTask,
  deleteTask,
};

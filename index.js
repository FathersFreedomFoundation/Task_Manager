// Import required modules
const express = require('express');
const cors = require('cors');  // Import cors
const app = express();
const PORT = process.env.PORT || 5000; // Use port from environment variable or default to 5000

// Middleware to parse JSON
app.use(express.json());

// Enable CORS for external testing
app.use(cors());

// Temporary in-memory storage for tasks
let tasks = [];

// Route for root URL
app.get('/', (req, res) => {
  res.send('Welcome to the Task Manager API');
});

// Create a Task (POST)
app.post('/tasks', (req, res) => {
  console.log('POST request received: ', req.body); // Log the request body

  const task = {
    id: tasks.length + 1, // simple incremental ID
    name: req.body.name,
    completed: false,
  };

  tasks.push(task); // Add task to the in-memory array
  console.log('Task added: ', task); // Log the added task

  res.status(201).send(task); // Send back the new task
});

// Get All Tasks (GET)
app.get('/tasks', (req, res) => {
  res.send(tasks); // Send the tasks array
});

// Update a Task (PUT)
app.put('/tasks/:id', (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).send('Task not found');

  task.completed = req.body.completed;
  res.send(task);
});

// Delete a Task (DELETE)
app.delete('/tasks/:id', (req, res) => {
  const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id));
  if (taskIndex === -1) return res.status(404).send('Task not found');

  const deletedTask = tasks.splice(taskIndex, 1);
  res.send(deletedTask);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

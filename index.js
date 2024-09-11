const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

const dbURI = 'mongodb+srv://leftbeehind:dNesVEP6cIZIZNIv@cluster0.fp7zq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Failed to connect to MongoDB:', err));

const taskSchema = new mongoose.Schema({
  name: String,
  completed: { type: Boolean, default: false }
});

const Task = mongoose.model('Task', taskSchema);

app.get('/', (req, res) => {
  res.send('Welcome to the Task Manager API');
});

app.post('/tasks', async (req, res) => {
  try {
    const task = new Task({ name: req.body.name });
    const savedTask = await task.save();
    res.status(201).send(savedTask);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.send(tasks);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.put('/tasks/:id', async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, { completed: req.body.completed }, { new: true });
    if (!task) return res.status(404).send('Task not found');
    res.send(task);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.delete('/tasks/:id', async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).send('Task not found');
    res.send(task);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

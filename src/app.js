require('dotenv').config();
const express = require('express');

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Sample Route
app.get('/', (req, res) => {
  res.send('Hello, rishika!');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

module.exports = app;
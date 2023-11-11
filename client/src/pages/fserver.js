require('dotenv').config(); // Make sure to install the dotenv package
const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001; // The port the server will listen on

// Create a new pool instance to manage your PostgreSQL connections.
const pool = new Pool({
  user: process.env.DB_USER, // Replace with your database username
  host: process.env.DB_HOST, // Typically 'localhost' if your database is local
  database: process.env.DB_NAME, // Replace with your database name
  password: process.env.DB_PASSWORD, // Replace with your database password
  port: process.env.DB_PORT, // Replace with your database port, typically 5432
});

// Apply middleware
app.use(cors());
app.use(express.json()); // For parsing application/json

// Routes
// Example route to fetch courses
app.get('/courses', async (req, res) => {
  try {
    const courses = await pool.query('SELECT * FROM courses');
    res.json(courses.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
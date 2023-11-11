const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

// Initialize the express app
const app = express();

// Apply middleware
app.use(cors());
app.use(bodyParser.json());

// Initialize pool with your database credentials
const pool = new Pool({
  user: 'ctp_user',
  host: 'localhost',
  database: 'cuny_sphere',
  password: 'hello',
  port: 3001,
});

// API endpoint for login
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const result = await pool.query('SELECT * FROM users WHERE username = $1 AND password = $2', [username, password]);
    if (result.rows.length > 0) {
      res.json({ success: true, user: result.rows[0] });
    } else {
      res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

// Listen on a port
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
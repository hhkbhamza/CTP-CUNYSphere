const express = require('express');
const multer = require('multer');

const app = express();
const port = 8080;

// Set up multer for handling file uploads
const storage = multer.memoryStorage(); // You can choose a storage strategy based on your needs
const upload = multer({ storage: storage });

// Handle POST requests to the endpoint '/api/micro_posts'
app.post('/api/micro_posts', upload.single('file'), (req, res) => {
  try {
    // Access the uploaded file using req.file
    const filePath = req.filePath;

    // Access other form data using req.body
    const content = req.body.content;

    // Process the file and content as needed
    console.log('Content:', content);
    console.log('File:', filePath);

    // Respond with a success message
    res.status(200).json({ message: 'File uploaded successfully.' });
  } catch (error) {
    console.error('Error handling file upload:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});



// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const { Pool } = require('pg');


// // Initialize the express app
// const app = express();

// // Apply middleware
// app.use(cors());
// app.use(bodyParser.json());

// // Initialize pool with your database credentials
// const pool = new Pool({
//   user: 'ctp_user',
//   host: 'localhost',
//   database: 'cuny_sphere',
//   password: 'hello',
//   port: 3001,
// });

// // API endpoint for login
// app.post('/login', async (req, res) => {
//   const { username, password } = req.body;
//   try {
//     const result = await pool.query('SELECT * FROM users WHERE username = $1 AND password = $2', [username, password]);
//     if (result.rows.length > 0) {
//       res.json({ success: true, user: result.rows[0] });
//     } else {
//       res.status(401).json({ success: false, message: 'Invalid credentials' });
//     }
//   } catch (err) {
//     res.status(500).json({ success: false, message: 'Internal server error' });
//   }
// });

// // Listen on a port
// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
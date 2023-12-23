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
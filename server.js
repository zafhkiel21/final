const express = require('express');
const path = require('path');  // Import path module for joining file paths

const app = express();
const port = process.env.PORT || 3000;  // Use environment variable or default to port 3000

// Serve static files from the 'public' directory (optional)
app.use(express.static(path.join(__dirname, 'public')));  // Adjust path if needed

// Serve the main HTML file for all routes (single-page app approach)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));  // Adjust path if your main HTML file is named differently
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

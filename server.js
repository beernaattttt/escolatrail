require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 3000;

// Serve static files (like your HTML)
app.use(express.static('public'));

// Example endpoint that returns your token securely
app.get('/api/token', (req, res) => {
  res.json({ token: process.env.TOKEN });
});

app.listen(PORT, () => {
});

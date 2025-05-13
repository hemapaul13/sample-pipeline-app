// app.js
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World from Jenkins Pipeline!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

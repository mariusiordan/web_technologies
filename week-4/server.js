// ============================================================
//  server.js — a small Express server
//  It does two jobs:
//    1. Serves the static files (HTML, CSS, JS) in /public
//    2. Exposes one example API route the front-end can call
// ============================================================

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Let the server read JSON request bodies (handy once you add POST routes)
app.use(express.json());

// Serve everything inside the "public" folder as-is.
// Visiting http://localhost:3000/ will return public/index.html automatically.
app.use(express.static(path.join(__dirname, 'public')));

// ----- Example API route -----
// The front-end fetches this and shows the result on the page.
app.get('/api/hello', (req, res) => {
  res.json({
    message: 'Hello from the server!',
    time: new Date().toLocaleTimeString()
  });
});

// Start listening
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
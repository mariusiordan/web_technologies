// ============================================================
//  server.js — Express server for the check-in logger
//    - serves the front-end from /public
//    - records check-ins (stamped with the SERVER's time)
//    - saves them to checkins.json so they survive a restart
// ============================================================

const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_FILE = path.join(__dirname, 'checkins.json');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Load any previously saved check-ins when the server starts.
let checkins = [];
try {
  checkins = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
} catch {
  checkins = []; // no file yet — start with an empty list
}

// Return every recorded check-in
app.get('/api/checkins', (req, res) => {
  res.json(checkins);
});

// Record a new check-in, stamped with the server's own time
app.post('/api/checkin', (req, res) => {
  const now = new Date();
  const entry = {
    time: now.toLocaleTimeString(),
    date: now.toLocaleDateString()
  };
  checkins.push(entry);
  fs.writeFileSync(DATA_FILE, JSON.stringify(checkins, null, 2)); // save to disk
  res.json(entry);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
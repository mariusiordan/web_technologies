// Creating a server using the http module
// Code in Node.js
/*
const http = require('http');

const server = http.createServer((req, res) => {
    res.send("Hello, World!");
})

const PORT = 3000;
server.listen(PORT, () => {
    console.log('Server is running on http://localhost:${PORT}');
});
*/

// Code in Express.js
const express = require('express');
const app = express();
const PORT = 3000;
app.get('/', (req, res) => {
    res.send(`Server is running on http://localhost:${PORT} or on http://127.0.0.1:${PORT}!`);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT} or on http://127.0.0.1:${PORT}!`);
});
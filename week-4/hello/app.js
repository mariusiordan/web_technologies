// // console.log("Hello from Node.js")

// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('Hello from my first Node.js server!');
// });

// server.listen(3000, () => {
//     console.log('Server is running on http://localhost:3000');
// });

// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//     res.send('Hello from my first Express server!');
// });

// app.listen(3000, () => {
//     console.log('Server is running on http://localhost:3000');
// });






// ============================================================
//  A basic Node server that pulls REAL data from a public API
//  and returns it as plain text. Refresh the page for new data.
//  No packages needed — fetch is built into Node 18+.
// ============================================================
 
// const http = require('http');
 
//* The public API to call. Try swapping this URL for another:
//   Cat fact : https://catfact.ninja/fact                        -> data.fact
//   Advice   : https://api.adviceslip.com/advice                 -> data.slip.advice
//   Joke     : https://official-joke-api.appspot.com/random_joke -> data.setup / data.punchline
// const API_URL = 'https://catfact.ninja/fact';
 
// const server = http.createServer(async (req, res) => {
//   try {
//     const response = await fetch(API_URL);   // ask the public API
//     const data = await response.json();      // turn the JSON reply into an object
 
//     res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
//     res.end('Random cat fact:\n\n' + data.fact + '\n');
//   } catch (err) {
//     res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
//     res.end('Could not fetch data: ' + err.message + '\n');
//   }
// });
 
// server.listen(3000, () => {
//   console.log('Server running on http://localhost:3000');
// });


// ============================================================
// A basic Node server that returns either:
// - A random cat fact
// - A random joke
// - A random piece of advice
// Refresh the page for new content.
// Works with Node.js 18+ (fetch is built in)
// ============================================================

// const http = require('http');

// const server = http.createServer(async (req, res) => {
//   try {
//     // List of possible APIs
//     const options = ['cat', 'joke', 'advice'];

//     // Pick one at random
//     const choice = options[Math.floor(Math.random() * options.length)];

//     let output;

//     if (choice === 'cat') {
//       const response = await fetch('https://catfact.ninja/fact');
//       const data = await response.json();

//       output = `🐱 Random Cat Fact:\n\n${data.fact}\n`;

//     } else if (choice === 'joke') {
//       const response = await fetch('https://official-joke-api.appspot.com/random_joke');
//       const data = await response.json();

//       output = `😂 Random Joke:\n\n${data.setup}\n\n${data.punchline}\n`;

//     } else {
//       const response = await fetch('https://api.adviceslip.com/advice');
//       const data = await response.json();

//       output = `💡 Random Advice:\n\n${data.slip.advice}\n`;
//     }

//     res.writeHead(200, {
//       'Content-Type': 'text/plain; charset=utf-8'
//     });

//     res.end(output);

//   } catch (err) {
//     res.writeHead(500, {
//       'Content-Type': 'text/plain; charset=utf-8'
//     });

//     res.end('Could not fetch data: ' + err.message + '\n');
//   }
// });

// server.listen(3000, () => {
//   console.log('Server running on http://localhost:3000');
// });


// ============================================================
// Express server that returns either:
// - A random cat fact
// - A random joke
// - A random piece of advice

// Refresh the page for new content.
// Works with Node.js 18+ (fetch is built in)
// ============================================================

// const express = require('express');
// const app = express();

// const PORT = 3000;

// app.get('/', async (req, res) => {
//   try {
//     // Choose a random API
//     const options = ['cat', 'joke', 'advice'];
//     const choice = options[Math.floor(Math.random() * options.length)];

//     let output;

//     if (choice === 'cat') {
//       const response = await fetch('https://catfact.ninja/fact');
//       const data = await response.json();

//       output = `🐱 Random Cat Fact\n\n${data.fact}`;

//     } else if (choice === 'joke') {
//       const response = await fetch('https://official-joke-api.appspot.com/random_joke');
//       const data = await response.json();

//       output = `😂 Random Joke\n\n${data.setup}\n\n${data.punchline}`;

//     } else {
//       const response = await fetch('https://api.adviceslip.com/advice');
//       const data = await response.json();

//       output = `💡 Random Advice\n\n${data.slip.advice}`;
//     }

//     res.type('text/plain');
//     res.send(output);

//   } catch (err) {
//     res.status(500).send(`Could not fetch data: ${err.message}`);
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });



const express = require('express');
const app = express();

const PORT = 3000;

// Main UK cities and their coordinates
const cities = [
  { name: "London", lat: 51.5072, lon: -0.1276 },
  { name: "Birmingham", lat: 52.4862, lon: -1.8904 },
  { name: "Manchester", lat: 53.4808, lon: -2.2426 },
  { name: "Leeds", lat: 53.8008, lon: -1.5491 },
  { name: "Glasgow", lat: 55.8642, lon: -4.2518 },
  { name: "Liverpool", lat: 53.4084, lon: -2.9916 },
  { name: "Newcastle", lat: 54.9783, lon: -1.6178 },
  { name: "Sheffield", lat: 53.3811, lon: -1.4701 },
  { name: "Bristol", lat: 51.4545, lon: -2.5879 },
  { name: "Edinburgh", lat: 55.9533, lon: -3.1883 }
];

app.get('/', async (req, res) => {
    try {

        let output = "UK Weather Forecast\n";
        output += "==============================\n\n";

        for (const city of cities) {

            const url =
                `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lon}&daily=temperature_2m_max,temperature_2m_min&current=temperature_2m&forecast_days=2`;

            const response = await fetch(url);
            const data = await response.json();

            output += `${city.name}\n`;
            output += `Current: ${data.current.temperature_2m}°C\n`;
            output += `Today: ${data.daily.temperature_2m_max[0]}°C / ${data.daily.temperature_2m_min[0]}°C\n`;
            output += `Tomorrow: ${data.daily.temperature_2m_max[1]}°C / ${data.daily.temperature_2m_min[1]}°C\n`;
            output += "------------------------------\n";
        }

        res.type("text/plain");
        res.send(output);

    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
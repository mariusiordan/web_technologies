# Node.js & Express.js API Learning Project

## Overview

This project is a learning journey exploring the basics of **Node.js**, **Express.js**, and working with external APIs.

The project started with a simple Node.js HTTP server and gradually evolved into an Express application that consumes real-world API data.

The final version displays weather information for major UK cities using the Open-Meteo weather API.

---

## Learning Objectives

This project covers:

- Creating a server with Node.js
- Understanding the built-in HTTP module
- Creating routes with Express.js
- Installing and using npm packages
- Making API requests using `fetch`
- Working with JSON responses
- Handling asynchronous JavaScript with `async/await`
- Error handling
- Using Git for version control

---

## Project Evolution

### Version 1 - Basic Node.js Server

Created a simple server using Node's built-in `http` module.

Features:
- Starts a web server
- Responds with plain text
- Uses port 3000

Example:
Hello from my first Node.js server!


---

### Version 2 - First Express.js Server

Converted the project from native Node HTTP to Express.

Learned:

- Installing Express
- Creating routes with `app.get()`
- Sending responses with `res.send()`

Example:
Hello from my first Express server!


---

### Version 3 - Connecting to External APIs

Added API integration using Node.js `fetch`.

The server started retrieving real data from public APIs:

- Cat facts API
- Advice API
- Joke API

Examples:
🐱 Random Cat Fact

Cats sleep around 16 hours a day.
😂 Random Joke

Why don't scientists trust atoms?

Because they make up everything.


---

### Version 4 - Random API Generator

Added logic to randomly select between:

- Cat facts
- Jokes
- Advice

Each page refresh returned different content.

This introduced:

- Arrays
- Random selection
- Conditional logic
- Multiple API calls

---

### Version 5 - Express API Application

Migrated the API project into Express.

Improved:

- Routing
- Error handling
- Response formatting
- Application structure

---

### Version 6 - UK Weather Forecast API

Final version became a weather application.

Features:

- Express server
- Multiple UK cities
- Current temperature
- Today's forecast
- Tomorrow's forecast

Cities included:

- London
- Birmingham
- Manchester
- Leeds
- Glasgow
- Liverpool
- Newcastle
- Sheffield
- Bristol
- Edinburgh

Weather data is provided by:

Open-Meteo API

https://open-meteo.com/

---

## Technologies Used

- Node.js
- Express.js
- JavaScript
- Fetch API
- Open-Meteo Weather API
- Git

---

## Installation

Clone the repository:

```bash
git clone YOUR_REPOSITORY_URL


Example Output

UK Weather Forecast
==============================

London

Current: 18°C
Today: 22°C / 14°C
Tomorrow: 23°C / 15°C

------------------------------

Birmingham

Current: 17°C
Today: 21°C / 13°C
Tomorrow: 22°C / 14°C
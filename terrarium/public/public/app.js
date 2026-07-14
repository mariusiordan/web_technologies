const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send(`Server is running on http://localhost:${PORT} or on http://127.0.0.1:${PORT}!`);
});

app.get('/api/plants', (req, res) => {
    const plants = [
        { id: 1, name: "Fern", type: "Indoor" },
        { id: 2, name: "Cactus", type: "Succulent" },
        { id: 3, name: "Aloe Vera", type: "Succulent" }
    ];

    res.json(plants);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT} or on http://127.0.0.1:${PORT}!`);
});

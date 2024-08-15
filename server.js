const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.static('public')); // Serve static files from the 'public' directory
app.use(express.json()); // To parse JSON bodies

// Endpoint to handle traffic data
app.post('/upload', (req, res) => {
    const data = `Timestamp: ${new Date().toISOString()}, Count: ${req.body.count}\n`;
    fs.appendFile('traffic.txt', data, (err) => {
        if (err) {
            console.error('Failed to write to file', err);
            return res.status(500).send('Failed to write to file');
        }
        res.send('Data received and saved.');
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

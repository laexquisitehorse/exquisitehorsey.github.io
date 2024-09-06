const https = require('https');
const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();
const port = 9090;

// Middleware to serve static files
app.use(express.static(path.join(__dirname)));

// Create HTTPS server
const options = {
  key: fs.readFileSync('server/server-key.pem'),
  cert: fs.readFileSync('server/server.pem'),
};

https.createServer(options, app).listen(port, () => {
  console.log(`Server is listening on https://localhost:${port}`);
});

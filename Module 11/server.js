//var host = "127.0.0.1";
const port = 8080;
const express = require("express");
const app = express();

// cors to prevent CORS error.
const cors = require("cors");
app.use(cors());

// Middleware to log requests.
app.use((req, res, next) => {
    console.log(`${req.ip} - Request: ${req.method}, url: ${req.url}`);
    next();
})

// Delivers the index.html webpage.
app.use('/', express.static(__dirname));

// Handles the get request for data.json.
app.get('/data.json', (req, res) => {
    res.status(200).sendFile('data.json');
});

// Activates the node server to listen on the port specified above.
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})
const http = require('http');

const hostname = '127.0.0.1';
const port = 1245;

// Create an HTTP server
const app = http.createServer((req, res) => {
  // Set the response HTTP header with HTTP status and Content type
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  // Send the response body as "Hello Holberton School!"
  res.end('Hello Holberton School!');
});

// Listen on port 1245
app.listen(port, hostname);

module.exports = app;

const http = require('http');

// Create an HTTP server
const app = http.createServer((req, res) => {
  // Set the response HTTP header with HTTP status and Content type
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send the response body as "Hello Holberton School!"
  res.end('Hello Holberton School!');
});

// Listen on port 1245
app.listen(1245);

module.exports = app;

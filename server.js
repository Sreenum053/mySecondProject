// Load the http module to create an HTTP server.
const http = require('http');

// Define a port to listen on.
const port = 3000;

// Create a server that sends a simple response.
const server = http.createServer((req, res) => {
  // Set the response HTTP header with HTTP status and Content type.
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

// Start the server and listen on the defined port.
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

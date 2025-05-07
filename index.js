
// Import required modules
const express = require('express');
const { UVProxy } = require('ultraviolet');

// Initialize Express app
const app = express();
const port = process.env.PORT || 3000;

// Configure Ultraviolet instance
const uv = new UVProxy({
  bundle: true, // Enable bundling for better performance
  prefix: '/service/', // Define the proxy prefix
  bare: 'https://your-bare-server.com', // Replace with a configured bare server
  handler: './uv.handler.js', // Path to handler
  client: './uv.client.js', // Path to client
});

// Serve static files (Ultraviolet client)
app.use(express.static('./public'));

// Proxy endpoint
app.use(uv.prefix, uv.app());

// Root endpoint
app.get('/', (req, res) => {
  res.send(`
    <h1>Welcome to Drobix Proxy</h1>
    <p>Use this proxy to search and browse anonymously.</p>
    <a href="/service/">Start Browsing</a>
  `);
});

// Start the server
app.listen(port, () => {
  console.log(`Drobix Proxy is running at http://localhost:${port}`);
});

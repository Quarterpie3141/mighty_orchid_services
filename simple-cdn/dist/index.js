const express = require('express');
const path = require('node:path');
const app = express();
const PORT = 3000;
// Serve static files from the 'public' folder
const baseDir = path.join(__dirname, 'public');
console.log(`using ${baseDir}`);
// Custom middleware to log each static file request along with the client's IP, date, and time
app.use((req, res, next) => {
    if (req.path.startsWith('/')) { // Check if it's a request for static files
        const now = new Date();
        const timestamp = now.toISOString(); // ISO 8601 format (e.g., "2025-01-10T12:34:56.789Z")
        console.log(`[${timestamp}] Static file requested: ${req.path} | Requesting IP: ${req.ip}`);
    }
    next();
});
// Use express.static to serve static files
app.use(express.static(baseDir));
// Example API route
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from the API!' });
});
// Start the server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
//# sourceMappingURL=index.js.map
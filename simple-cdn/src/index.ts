const express = require('express');
import type { Request, Response, NextFunction } from 'express';
const app = express();
const PORT = 3000;

// Serve static files from the 'public' folder
const baseDir = "/public"
console.log(`using ${baseDir}`);

// Custom middleware to log each static file request along with the client's IP, date, and time
app.use((req: Request, res: Response, next: NextFunction) => {
  if (req.path.startsWith('/')) { // Check if it's a request for static files
    const now = new Date();
    const timestamp = now.toISOString(); // ISO 8601 format
    console.log(`[${timestamp}] Static file requested: ${req.path} | Requesting IP: ${req.ip}`);
  }
  next();
});

// Use express.static to serve static files
app.use(express.static(baseDir));

// Example API route
app.get('/api/hello', (req: Request, res: Response) => {
  res.json({ message: 'Hello from the API!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

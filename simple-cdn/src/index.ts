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
// maxAge matters for media: the default is `cache-control: public, max-age=0`,
// which forces revalidation on every byte-range request. Browsers then cannot
// retain ranges while streaming video, and Firefox fails ranged reads outright
// (NS_ERROR_DOM_MEDIA_RANGE_ERR). Deliberately not `immutable`, so replacing a
// file in place is still picked up once the cache entry goes stale.
app.use(express.static(baseDir, {
  maxAge: '30d',
}));

// Example API route
app.get('/api/hello', (req: Request, res: Response) => {
  res.json({ message: 'Hello from the API!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});


import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('📂 Current directory:', __dirname);

// Middleware
app.use(cors({
  origin: process.env.CORS_ORIGIN || '*',
  credentials: true
}));

app.use(express.json({ limit: "20kb" }));
app.use(express.urlencoded({ extended: true, limit: "20kb" }));
app.use(cookieParser());


import userRouter from './routes/user.routes.js';

app.use('/api/v1/users', userRouter);

app.get('/api/health', (req, res) => {
  res.json({ status: 'healthy', env: process.env.NODE_ENV });
});

if (process.env.NODE_ENV === 'production') {
  
  // Frontend path
  const frontendPath = path.join(__dirname, '../../Frontend/dist/index.html');
  
  console.log(' Environment:', process.env.NODE_ENV);
  console.log(' Frontend path:', frontendPath);
  
  // Static files middleware
  app.use(express.static(frontendPath, {
    maxAge: '1d',
    etag: true
  }));
  
  // Handle React Router (catch-all except /api)
  app.use((req, res, next) => {
   
    if (req.path.startsWith('/api')) {
      return next();
    }
    const indexPath = path.join(frontendPath, 'index.html');
    
    console.log('📄 Serving:', req.path, '→', indexPath);
    
    res.sendFile(indexPath, (err) => {
      if (err) {
        console.error(' Error serving file:', err);
        res.status(500).json({ 
          error: 'Failed to load page',
          path: indexPath 
        });
      }
    });
  });
}

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route not found: ${req.method} ${req.path}`
  });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(' Error:', err);
  
  res.status(err.statusCode || 500).json({
    success: false,
    message: process.env.NODE_ENV === 'production' 
      ? 'Something went wrong' 
      : err.message,
    ...(process.env.NODE_ENV === 'development' && { 
      stack: err.stack 
    })
  });
});

export { app };
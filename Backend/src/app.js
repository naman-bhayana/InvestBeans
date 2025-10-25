import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true
}));
app.use(express.json({ limit: "20kb" }));
app.use(express.urlencoded({ extended: true, limit: "20kb" }));
app.use(cookieParser());

import userRouter from './routes/user.routes.js';

app.use('/api/v1/users', userRouter);

app.get('/health', (req, res) => {
  res.status(200).json({ 
    success: true, 
    message: 'Server is running',
    timestamp: new Date().toISOString()
  });
});
if (process.env.NODE_ENV === 'production') {

  app.use(express.static(path.join(__dirname, '../frontend/dist')));

  app.get('/(.*)', (req, res) => {
    res.sendFile(
      path.join(__dirname, '../frontend/dist/index.html'),
      (err) => {
        if (err) {
          res.status(500).send('Error loading page');
        }
      }
    );
  });
}
import { errorHandler, notFound } from './middlewares/errorHandler.middleware.js';


app.use(notFound);

app.use(errorHandler);

export { app };
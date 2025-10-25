import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from './app.js';


dotenv.config();


const requiredEnvVars = [
    'MONGODB_URI',
    'PORT',
    'ACCESS_TOKEN_SECRET',
    'REFRESH_TOKEN_SECRET',
    'ACCESS_TOKEN_EXPIRY',
    'REFRESH_TOKEN_EXPIRY'
];

const missingEnvVars = requiredEnvVars.filter(varName => !process.env[varName]);

if (missingEnvVars.length > 0) {
    console.error(' Missing required environment variables:');
    missingEnvVars.forEach(varName => console.error(`   - ${varName}`));
    process.exit(1);
}


process.on('uncaughtException', (err) => {
    console.error('\n' + '='.repeat(50));
    console.error(' UNCAUGHT EXCEPTION! Shutting down...');
    console.error('='.repeat(50));
    console.error('Error:', err.message);
    console.error('Stack:', err.stack);
    console.error('='.repeat(50) + '\n');
    process.exit(1);
});


connectDB()
    .then(() => {
        const PORT = process.env.PORT || 8000;
        
        const server = app.listen(PORT, () => {
            console.log('='.repeat(50));
            console.log(`⚙️  Server is running on port: ${PORT}`);
            console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
            console.log(`🔗 URL: http://localhost:${PORT}`);
            console.log('='.repeat(50) + '\n');
        });

     
        process.on('unhandledRejection', (err) => {
            console.error('\n' + '='.repeat(50));
            console.error(' UNHANDLED REJECTION! Shutting down...');
            console.error('='.repeat(50));
            console.error('Error:', err.message);
            console.error('Stack:', err.stack);
            console.error('='.repeat(50) + '\n');
            
            server.close(() => {
                process.exit(1);
            });
        });

        
        process.on('SIGTERM', () => {
            console.log(' SIGTERM received. Shutting down gracefully...');
            server.close(() => {
                console.log(' Process terminated!');
            });
        });
    })
    .catch((err) => {
        console.error(" MongoDB connection failed!", err);
        process.exit(1);
    });
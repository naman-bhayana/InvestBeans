import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
      
        const options = {
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000,
        };

        const connectionInstance = await mongoose.connect(
            `${process.env.MONGODB_URI}/${DB_NAME}`,
            options
        );

        console.log('\n' + '='.repeat(50));
        console.log('✅ MongoDB Connected Successfully!');
        console.log(`📍 DB Host: ${connectionInstance.connection.host}`);
        console.log(`🗄️  Database: ${connectionInstance.connection.name}`);
        console.log('='.repeat(50) + '\n');

       
        mongoose.connection.on('error', (err) => {
            console.error('❌ MongoDB connection error:', err);
        });

        mongoose.connection.on('disconnected', () => {
            console.log('⚠️  MongoDB disconnected');
        });

    } catch (error) {
        console.error('\n' + '='.repeat(50));
        console.error('❌ MONGODB CONNECTION FAILED!');
        console.error('='.repeat(50));
        console.error('Error:', error.message);
        console.error('Stack:', error.stack);
        console.error('='.repeat(50) + '\n');
        process.exit(1);
    }
};

export default connectDB;
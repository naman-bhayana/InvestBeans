import 'dotenv/config';
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";


const app=express()

const IS_PROD = process.env.NODE_ENV === 'production';

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit:"20kb"}))
app.use(express.urlencoded({extended:true,limit:"20kb"}))
app.use(cookieParser())


import userRouter from './routes/user.routes.js';



app.use("/api/v1/users",userRouter)


export {app}
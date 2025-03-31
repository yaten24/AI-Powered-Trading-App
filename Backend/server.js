import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config({});
import {connectDB} from './db/db_connect.js'

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true,
}));

// API's here




connectDB()
.then(() => {
  console.log("MongoDB connected successfully");
  app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on port ${process.env.PORT || 5000}`);
  });
}
)
.catch((error) =>{
    console.error("MongoDB connection error:", error);
    process.exit(1);
}
)
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { TaskRoutes } from './taskAll/taskAllRoutes.js';
import mongoose from 'mongoose';

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT;
const MONGODB_URI = "mongodb+srv://hafizahteshamali363617:Intelligence363617@all-databases.ffshj.mongodb.net/Practice_Database_For_Tasks";

app.get('/', (req, res)=>{
    res.send("Welcome to Backend");
})

const DbConnenction = async ()=>{
    try {
        await mongoose.connect(MONGODB_URI)
        console.log("Database connected");
    } catch (error) {
        console.log("Database not Connected");
    }
}

DbConnenction();

app.use('/alltasks', TaskRoutes);

app.listen(PORT, ()=>{
    console.log("backend server star successfully");
})

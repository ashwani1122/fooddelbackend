
 dotenv.config();
// const dns = require('dns'); // or require('dns') for older versions
import dns from "node:dns/promises"
dns.setServers(['1.1.1.1', '8.8.8.8']);

import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db.js';
const PORT = process.env.PORT || 8080;
import router from './routes/foodRoute.js';
import userRoutes from "./routes/userRoutes.js";
import cartRoutes from ".routes/cartRoutes.js";
import orderRoutes from ".routes/orderRoutes.js";
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/food" , router);
app.use("/images", express.static("uploads"));
app.use("/api/cart" , cartRoutes);
app.use("/api/user" , userRoutes);

app.use("/api/order" , orderRoutes);

// db connection
connectDB();

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})




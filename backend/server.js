import express from "express";
import dotenv from 'dotenv'
import { coonectToDB } from "./config/db.js";
import productRouter from "./routes/product.route.js";



dotenv.config();



const app = express();
const PORT = process.env.PORT || 5000
app.use(express.json())
app.use ("/api/products/",productRouter)





app.listen(PORT, () => {
    coonectToDB();
});


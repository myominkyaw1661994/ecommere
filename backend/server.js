import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';


import productRouter from './routes/productRoutes.js';

dotenv.config();
const app = express();
connectDB()

app.get('/', (req, res) => {
    res.send('API is running');
})

app.use('/api/products', productRouter);


app.use(notFound);

app.use(errorHandler);


const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server runing in ${process.env.NODE_ENV} post ${PORT}...`.yellow.bold));

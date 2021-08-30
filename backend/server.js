import express from 'express';
import products from './data/products.js';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';

dotenv.config();

const app = express();

connectDB()

app.get('/', (req, res) => {
    res.send('API is running');
})

app.get('/api/products', (req, res) => {
    res.json(products);
})

app.get('/api/product/:id', (req, res) => {
    const product = products.find(p => p._id == req.params.id);
    res.json(product);
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server runing in ${process.env.NODE_ENV} post ${PORT}...`.yellow.bold));

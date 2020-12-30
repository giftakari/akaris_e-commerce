import express from 'express';
import dotenv from 'dotenv';
import asyncHandler from 'express-async-handler';
import colors from 'colors';
dotenv.config();
const app = express();

import connectDB from './data/congfig/db.js';
import productsRoutes from './routes/ProductsRoutes.js';
import Product from './models/productModel.js';

connectDB();

app.get('/', (request, response) => {
  response.json('App is running ');
});

app.use('/api/products', productsRoutes);

const PORT = process.env.PORT || 3030;
app.listen(PORT, () => console.log(`App is running ${PORT}`.yellow.bold));

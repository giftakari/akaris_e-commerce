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

app.use((req, res, next) => {
  const error = new Error(`Not Found -${req.originalUrl}`);
  res.status(404);
  next(error);
});

app.use((err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
});

const PORT = process.env.PORT || 3030;
app.listen(PORT, () => console.log(`App is running ${PORT}`.yellow.bold));

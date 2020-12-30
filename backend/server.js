import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const app = express();

import products from './data/products.js';

app.get('/', (request, response) => {
  response.send(`App is working `);
});

app.get('/api/products', (request, response) => {
  response.json(products);
});

app.get('/api/products/:id', (request, response) => {
  const product = products.find((product) => product._id === request.params.id);
  response.json(product);
});

const PORT = process.env.PORT || 3030;
app.listen(PORT, () => console.log(`App is running ${PORT}`));

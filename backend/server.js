const express = require('express');
const app = express();
const port = 3030;
const products = require('./data/products');

app.get('/', (request, response) => {
  response.send(`App is working `);
});

app.get('/api/product', (request, response) => {
  response.json(products);
});

app.get('/api/product/:id', (request, response) => {
  const product = products.find((product) => product._id === request.params.id);
  response.json(product);
});
app.listen(3030, () => console.log(`App is running ${port}`));

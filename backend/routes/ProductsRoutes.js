import express from 'express';
import Product from '../models/productModel.js';
import asyncHandler from 'express-async-handler';
const router = express.Router();

router.get(
  '/',
  asyncHandler(async (request, response) => {
    const product = await Product.find({});
    response.json(product);
  })
);

router.get(
  '/:id',
  asyncHandler(async (request, response) => {
    const product = await Product.findById(request.params.id);
    if (product) {
      response.json(product);
    } else {
      response.status(404).json({ message: 'Product not found' });
    }
  })
);

export default router;

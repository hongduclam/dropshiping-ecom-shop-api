import ProductController from '../controllers/ProductController';
import productValidator from '../validators/product.validator';

const express = require('express');

const productRouter = express.Router();

productRouter.post('/product', [productValidator.formCreate], ProductController.createProduct);
productRouter.get('/product/:id(\\d+)', ProductController.getProduct);
productRouter.put('/product/:id(\\d+)', [productValidator.formEdit], ProductController.updatedProduct);
productRouter.delete('/product/:id(\\d+)', ProductController.deleteProduct);
productRouter.get('/product', ProductController.searchProduct);

export default productRouter;

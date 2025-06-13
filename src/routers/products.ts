import { Router } from 'express';
import {
  createProductController,
  deleteProductController,
  getProductByIdController,
  getProductsController,
  updateProductController,
} from '../controllers/products';

export const productsRouter = Router();

productsRouter.get('/products', getProductsController);
productsRouter.get('/products/:productId', getProductByIdController);
productsRouter.post('/products', createProductController);
productsRouter.patch('/products/:productId', updateProductController);
productsRouter.delete('/products/:productId', deleteProductController);

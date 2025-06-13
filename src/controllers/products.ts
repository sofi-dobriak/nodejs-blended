import { RequestHandler } from 'express';
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  updateProduct,
} from '../services/products';

export const getProductsController: RequestHandler = async (req, res) => {
  const products = await getAllProducts();

  res.status(200).json({
    status: 200,
    message: 'Successfully found products!',
    data: products,
  });
};

export const getProductByIdController: RequestHandler = async (req, res) => {
  const { productId } = req.params;
  const product = await getProductById(productId);

  res.status(200).json({
    status: 200,
    message: `Successfully found product with id ${productId}!`,
    data: product,
  });
};

export const createProductController: RequestHandler = async (req, res) => {
  const product = await createProduct(req.body);

  res.status(201).json({
    status: 201,
    message: 'Successfully created a product!',
    data: product,
  });
};

export const updateProductController: RequestHandler = async (req, res) => {
  const { productId } = req.params;
  const product = await updateProduct(productId, req.body);

  res.status(200).json({
    status: 200,
    message: 'Successfully patched a product!',
    data: product,
  });
};

export const deleteProductController: RequestHandler = async (req, res) => {
  const { productId } = req.params;
  await deleteProduct(productId);

  res.status(204).send();
};

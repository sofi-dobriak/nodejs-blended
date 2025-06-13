import { productsCollection } from '../db/models/products';
import createHttpError from 'http-errors';
import { CreateProduct, UpdateProduct } from '../types/product';

export const getAllProducts = async () => {
  const products = await productsCollection.find();

  if (!products) {
    throw createHttpError(404, 'Products not found');
  }

  return products;
};

export const getProductById = async (productId: string) => {
  const product = await productsCollection.findById(productId);

  if (!product) {
    throw createHttpError(404, 'Product not found');
  }

  return product;
};

export const createProduct = async (payload: CreateProduct) => {
  const product = await productsCollection.create(payload);
  return product;
};

export const updateProduct = async (
  productId: string,
  payload: UpdateProduct,
) => {
  const result = await productsCollection.findByIdAndUpdate(
    { _id: productId },
    payload,
    { includeResultMetadata: true },
  );

  if (!result.value) {
    throw createHttpError(404, 'Product not found');
  }

  return result.value;
};

export const deleteProduct = async (productId: string) => {
  const product = await productsCollection.findByIdAndDelete(productId);

  if (!product) {
    throw createHttpError(404, 'Product not found');
  }
};

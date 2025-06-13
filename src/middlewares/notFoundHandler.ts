import { RequestHandler } from 'express';

export const notFoundHandler: RequestHandler = async (req, res, next) => {
  res.status(404).json({
    status: 400,
    message: 'Route not found',
  });
};

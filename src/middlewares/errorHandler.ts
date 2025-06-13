import { ErrorRequestHandler } from 'express';

export const errorHandler: ErrorRequestHandler = async (
  err,
  req,
  res,
  next,
) => {
  const status = err.status || 500;

  res.status(status).json({
    status,
    message: 'Something went wrong',
    data: err.message,
  });
};

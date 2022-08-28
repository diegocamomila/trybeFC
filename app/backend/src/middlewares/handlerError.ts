import { ErrorRequestHandler } from 'express';

const HandlerError: ErrorRequestHandler = (err, _req, res, _next) => {
  console.log(err);

  if (err.statusCode) return res.status(err.statusCode).json({ message: err.message });

  return res.status(500).json({ message: 'Internal server error' });
};
export default HandlerError;

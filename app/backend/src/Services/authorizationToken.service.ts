import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import ObjError from '../middlewares/objError';
import jwtToken from '../utils/jwtToken';

export default (req: Request, res: Response) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      throw new ObjError(401, 'Token must be a valid token');
    }
    const userDecoded = jwtToken.decodeToken(authorization) as jwt.JwtPayload;
    const { role } = userDecoded;
    return res.status(200).json({ role });
  } catch (error) {
    throw new ObjError(401, 'Token must be a valid token');
  }
};

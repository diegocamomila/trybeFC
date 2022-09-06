// import { NextFunction, Request, Response } from 'express';
// import * as jwt from 'jsonwebtoken';
// import LoginService from '../services/LoginService/login.service';

// const validateToken = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const token = req.headers;

//     if (!token || !token.authorization) {
//       return res.status(401).json({ message: 'Token not found' });
//     }

//     const decoded: any = jwt.verify(token.authorization, process.env.JWT_SECRET || 'jwt_secret');

//     const user = await LoginService.validateUser(decoded.data.dataValues.email);

//     if (!user) {
//       return res.status(401).json({ message: 'Token must be a valid token' });
//     }

//     res.locals.payload = user;

//     next();
//   } catch (error) {
//     console.error(error);
//   }
// };

// export default validateToken;

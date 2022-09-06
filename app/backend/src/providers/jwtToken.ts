import * as Jwt from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs';
import { IUser } from '../interfaces/login.interface';

const SECRET = process.env.JWT_SECRET || 'jwt_secret';

export default class JwtToken {
  static tokenGenerator = (user:Omit<IUser, 'password'>) => {
    const newToken = Jwt.sign({ data: user }, SECRET, {
      expiresIn: '7d',
      algorithm: 'HS256',
    });
    return newToken;
  };

  static checkToken = (token: string, tokenUser:string) => {
    const payload = bcrypt.compare(token, tokenUser);
    return payload;
  };

  static validatePassword = (authorization: string) => {
    const payload = Jwt.verify(authorization, SECRET);
    return payload;
  };
}

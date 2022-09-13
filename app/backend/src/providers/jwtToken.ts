import * as Jwt from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs';
import { UserDTO } from '../interfaces/login.interface';

const SECRET = process.env.JWT_SECRET || 'jwt_secret';

export default class JwtToken {
  tokenGenerator = (user:Omit<UserDTO, 'password'>) => {
    const newToken = Jwt.sign({ data: user }, SECRET, {
      expiresIn: '7d',
      algorithm: 'HS256',
    });
    return newToken;
  };

  checkToken = (token: string, tokenUser:string) => {
    const payload = bcrypt.compare(token, tokenUser);
    return payload;
  };

  validatePassword = (authorization: string) => {
    const payload = Jwt.verify(authorization, SECRET);
    return payload;
  };
}

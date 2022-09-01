import * as Jwt from 'jsonwebtoken';
// import * as dotenv from 'dotenv';
import * as bcrypt from 'bcryptjs';
import IUserDTO from '../services/LoginService/userDTO.service';
import IJwtToken from './IJwtToken';

const SECRET = process.env.JWT_SECRET || 'jwt_secret';

export default class JwtToken implements IJwtToken {
  tokenGenerator = (user:Omit<IUserDTO, 'password'>): string => {
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

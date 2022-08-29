import * as Jwt from 'jsonwebtoken';
import { IUserDTO } from '../repositoriesDTO/userLoginServiceDTO';

const SECRET = process.env.JWT_SECRET || 'joinha';

const tokenGenerator = (user:Omit<IUserDTO, 'password'>) => {
  const newToken = Jwt.sign({ data: user }, SECRET, {
    expiresIn: '7d',
    algorithm: 'HS256',
  });
  return newToken;
};

const decodeToken = (token: string) => Jwt.verify(token, SECRET);

export default {
  tokenGenerator,
  decodeToken,
};

import * as Jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
import { IAuthDTO, IUserDTO } from '../repositoriesDTO/userLoginServiceDTO';

const SECRET = process.env.JWT_SECRET || 'jwt_secret';
dotenv.config();
class TokenGenerator {
  public static tokenGenerator = (user:Omit<IUserDTO, 'password'>) => {
    const newToken = Jwt.sign({ data: user }, SECRET, {
      expiresIn: '7d',
      algorithm: 'HS256',
    });
    return newToken;
  };

  public static checkToken = (authorization: IAuthDTO) => {
    const { token } = authorization;
    const payload = Jwt.verify(token, SECRET);
    const data = payload as Jwt.JwtPayload;
    return data;
  };
}

export default TokenGenerator;

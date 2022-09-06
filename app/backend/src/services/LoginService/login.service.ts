// fonte https://medium.com/@matheusbessa_44838/princ%C3%ADpios-solid-com-typescript-4f8a9d5d1ef8
// fonte https://www.youtube.com/watch?v=vAV4Vy4jfkc
// fonte https://medium.com/@matheusbessa_44838/princípios-solid-com-typescript-4f8a9d5d1ef8

import { JwtPayload } from 'jsonwebtoken';
import ObjError from '../../middlewares/objError';
import User from '../../database/models/user';
import JwtToken from '../../providers/jwtToken';

export default class LoginService {
  private userModel = User;
  private jwtToken = JwtToken;

  async checkUser(email: string, password: string): Promise<string> {
    if (!email || !password || password.length < 6) {
      throw new ObjError(400, 'All fields must be filled');
    }

    const checkEmail = await this.userModel.findOne({ where: { email } });
    if (!checkEmail) {
      throw new ObjError(401, 'Incorrect email or password');
    }

    const checkPassword = await this.jwtToken.checkToken(password, checkEmail.password);
    if (!checkPassword) {
      throw new ObjError(401, 'Incorrect email or password');
    }

    const token = this.jwtToken.tokenGenerator(checkEmail);
    return token;
  }

  async validateLogin(token: string | undefined) {
    if (!token) {
      throw new ObjError(402, 'Token not found');
    }

    const validation = await this.jwtToken.validatePassword(token);
    const { data } = validation as JwtPayload;
    return data.role;
  }
}

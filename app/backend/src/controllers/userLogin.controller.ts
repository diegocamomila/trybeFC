import { response } from 'express';
import { ILoginDTO } from '../repositoriesDTO/userLoginServiceDTO';

export default class UserLoginController {
  static async handlerLogin(data:ILoginDTO) {
    const token = await this.validateLogin(data);
    return response.status(200).json({ token });
  }

  static async validateToken(authorization?: string) {
    const role = await this.validatePassword(authorization);
    return response.status(200).json({ role });
  }
}

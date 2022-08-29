import { response } from 'express';
import { ILoginDTO } from '../repositoriesDTO/userLoginServiceDTO';
import { IUserPasswordRepository } from '../repositories/IUserPassword.repository';
import { IUserCheckRepository } from '../repositories/IUserCheckToken.repository';

export default class UserLoginController {
  static userPasswordRepository: IUserPasswordRepository;
  static userCheckRepository: IUserCheckRepository;

  static async handlerLogin(data:ILoginDTO) {
    const token = await this.userPasswordRepository.validateLogin(data);
    return response.status(200).json({ token });
  }

  static async validateToken(authorization?: string) {
    const role = await this.userCheckRepository.validatePassword(authorization);
    return response.status(200).json({ role });
  }
}

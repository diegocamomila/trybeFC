// fonte https://medium.com/@matheusbessa_44838/princ%C3%ADpios-solid-com-typescript-4f8a9d5d1ef8
// fonte https://www.youtube.com/watch?v=vAV4Vy4jfkc
// fonte https://medium.com/@matheusbessa_44838/princípios-solid-com-typescript-4f8a9d5d1ef8

import User from '../../database/models/user';
import IUser from '../LoginService/loginDTO.service';
import ILoginService from './ILogin.service';

export default class LoginService implements ILoginService {
  private userModel = User;

  // checkFields(email: string, password: string): Promise<boolean> {
  //   const result = (email.length <= 0 || password.length <= 0);
  //   return result;
  // }

  async checkUser(email: string): Promise<IUser | undefined> {
    const resultUser = await this.userModel.findOne({ where: { email } });

    return resultUser as IUser;
  }

  // checkAuthorizatin(token: string): Promise<boolean>{
  //  const result = (token.length <= 0 || undefined)
  //  return result;
  // }
}

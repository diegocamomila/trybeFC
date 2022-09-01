// fonte https://medium.com/@matheusbessa_44838/princ%C3%ADpios-solid-com-typescript-4f8a9d5d1ef8
// fonte https://www.youtube.com/watch?v=vAV4Vy4jfkc
// fonte https://medium.com/@matheusbessa_44838/princípios-solid-com-typescript-4f8a9d5d1ef8

import User from '../../database/models/user';
import IUserDTO from '../LoginService/userDTO.service';
import ILoginService from './ILogin.service';

export default class LoginService implements ILoginService {
  private userModel = User;

  // async execute(request:Request, response: Response): Promise<Response> {
  //   const { email, password } = request.body;
  //   const token = await this.loginUserServer.execute(email, password);
  //   return token;
  // }

  async checkUser(email: string): Promise<IUserDTO | undefined> {
    const resultUser = await this.userModel.findOne({ where: { email } });

    return resultUser as IUserDTO;
  }

  // checkAuthorizatin(token: string): Promise<boolean>{
  //  const result = (token.length <= 0 || undefined)
  //  return result;
  // }
}

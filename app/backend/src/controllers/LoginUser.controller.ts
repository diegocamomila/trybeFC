// import ILoginDTO from '../services/LoginService/loginDTO.service';
import { response } from 'express';
import LoginUserServer from '../services/LoginService/LoginUser.service';

export default class LoginUserController {
  static handlerLogin: any;
  constructor(
    private loginUserServer: LoginUserServer,
  ) {}

  async handlerLogin(email:string, password: string): Promise<any> {
  //  { email, password } = request.body;
    const token = await this.loginUserServer.execute(email, password);
    return response.status(200).json({ token });
  }

  // static async validateToken(authorization?: string) {
  //   const role = await this.validatePassword(authorization);
  //   return response.status(200).json({ role });
  // }
}

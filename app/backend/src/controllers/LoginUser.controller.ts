// import ILoginDTO from '../services/LoginService/loginDTO.service';

import { Request, Response } from 'express';
import LoginUserServer from '../services/LoginService/LoginUser.service';

export default class LoginUserController {
  constructor(
    private loginUserServer: LoginUserServer,
  ) {}

  async handlerLogin(request: Request, response: Response): Promise<Response | null> {
    const { email, password } = request.body;
    const token = await this.loginUserServer.execute(email, password);
    return response.status(200).json({ token });
  }

  // static async validateToken(authorization?: string) {
  //   const role = await this.validatePassword(authorization);
  //   return response.status(200).json({ role });
  // }
}

// import ILoginDTO from '../services/LoginService/loginDTO.service';

import { NextFunction, Request, Response } from 'express';
import LoginUserServer from '../services/LoginService/LoginUser.service';

export default class LoginUserController {
  constructor(
    private loginUserServer: LoginUserServer,
  ) {}

  async handlerLogin(request: Request, response: Response, next: NextFunction) {
    try {
      const { email, password } = request.body;
      const token = await this.loginUserServer.execute(email, password);
      return response.status(200).json({ token });
    } catch (error) {
      next(error);
    }
  }

  async validateToken(request: Request, response: Response, next: NextFunction) {
    try {
      const { authorization } = request.headers;
      const role = await this.loginUserServer.check(authorization);
      return response.status(200).json({ role });
    } catch (error) {
      next(error);
    }
  }
}
// teste.

import { NextFunction, Request, Response } from 'express';
import LoginService from '../services/LoginService/login.service';

export default class LoginController {
  constructor(
    private loginService: LoginService,
  ) {}

  async handlerLogin(request: Request, response: Response, next: NextFunction) {
    try {
      const { email, password } = request.body;
      const token = await this.loginService.checkUser(email, password);
      return response.status(200).json({ token });
    } catch (error) {
      next(error);
    }
  }

  async validateToken(request: Request, response: Response, next: NextFunction) {
    try {
      const { authorization } = request.headers;
      const role = await this.loginService.validateLogin(authorization);
      return response.status(200).json({ role });
    } catch (error) {
      next(error);
    }
  }
}

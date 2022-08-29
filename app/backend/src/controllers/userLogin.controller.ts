import { Request, Response, NextFunction } from 'express';
import UserloginService from '../Services/UserLogin.service';

export default class UserLoginController {
  constructor(
    private userloginService: UserloginService,
  ) {}

  async execute(req: Request, res: Response, next: NextFunction) {
    try {
      const token = await this.userloginService.execute(req.body);
      return res.status(200).json({ token });
    } catch (error) {
      return next(error);
    }
  }
}

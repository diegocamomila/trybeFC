import LoginController from '../../controllers/login.controller';
import LoginService from './login.service';

export const loginService = new LoginService();

export const loginController = new LoginController(
  loginService,
);

export default {
  loginService,
  loginController,
};

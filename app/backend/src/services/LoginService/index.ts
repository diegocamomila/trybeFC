import User from '../../database/models/user';
import JwtToken from '../../providers/jwtToken';
import LoginController from '../../controllers/login.controller';
import LoginService from './login.service';

export const jwtToken = new JwtToken();
export const user = User;
export const loginService = new LoginService(
  user,
  jwtToken,
);

export const loginController = new LoginController(
  loginService,
);

export default {
  loginService,
  loginController,
};

import LoginUserController from '../../controllers/LoginUser.controller';
import JwtToken from '../../providers/jwtToken';
import LoginService from '../LoginImplementation/login.service';
import LoginUserService from './LoginUser.service';

const logimService = new LoginService();
const jwtToken = new JwtToken();

export const loginUserService = new LoginUserService(
  logimService,
  jwtToken,
);

export const loginUserController = new LoginUserController(
  loginUserService,
);

export default {
  loginUserService,
  loginUserController,
};

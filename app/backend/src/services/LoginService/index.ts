import LoginUserController from '../../controllers/LoginUser.controller';
import JwtToken from '../../providers/jwtToken';
import LoginService from '../LoginImplementation/login.service';
import LoginUserService from './LoginUser.service';

const logimSrvice = new LoginService();
const jwtToken = new JwtToken();

const loginUserService = new LoginUserService(
  logimSrvice,
  jwtToken,
);
const controller = new LoginUserController(
  loginUserService,
);

export default {
  loginUserService,
  controller,
};

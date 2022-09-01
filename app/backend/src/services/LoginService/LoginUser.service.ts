import console = require('console');
import { JwtPayload } from 'jsonwebtoken';
import ObjError from '../../middlewares/objError';
import IJwtToken from '../../providers/IJwtToken';
import ILoginService from '../LoginImplementation/ILogin.service';

export default class LoginUserServer {
  constructor(
    private loginService: ILoginService,
    private jwtToken: IJwtToken,
  ) {}

  async execute(email: string, password: string): Promise<string> {
    if (!email || !password) {
      throw new ObjError(400, 'All fields must be filled');
    }
    const resultCheckUser = await this.loginService.checkUser(email);
    if (!resultCheckUser) throw new ObjError(401, 'Incorrect email or password');
    // console.log(resultCheckUser);
    const resultCheckToken = await this.jwtToken
      .checkToken(password, resultCheckUser.password);
    if (!resultCheckToken) throw new ObjError(401, 'Incorrect email or password');
    // console.log(resultCheckToken);
    const resultTokenGenerator = this.jwtToken.tokenGenerator(resultCheckUser);
    return resultTokenGenerator;
  }

  async check(authorization: string | undefined) {
    if (!authorization) {
      throw new ObjError(402, 'Token not found');
    }

    const validaToken = await this.jwtToken.validatePassword(authorization);
    console.log(validaToken);
    const { data } = validaToken as JwtPayload;
    return data.role;
  }
}

import ObjError from '../../middlewares/objError';
import IJwtToken from '../../providers/IJwtToken';
import ILoginService from '../LoginImplementation/ILogin.service';
import IUserDTO from './loginDTO.service';

export default class LoginUserServer {
  constructor(
    private loginService: ILoginService,
    private jwtToken: IJwtToken,
  ) {}

  async execute(data: IUserDTO) {
    const fields = data;
    if (!fields.email || !fields.password?.length) {
      throw new ObjError(400, 'All fields must be filled');
    }

    const resultCheckUser = await this.loginService.checkUser(fields.email);
    if (!resultCheckUser) throw new ObjError(401, 'Incorrect email or password');

    const resultCheckToken = await this.jwtToken
      .checkToken(fields.password, resultCheckUser.password);
    if (!resultCheckToken) throw new ObjError(401, 'Incorrect email or password');

    const resultTokenGenerator = this.jwtToken.tokenGenerator(resultCheckUser);
    return resultTokenGenerator;
  }
}

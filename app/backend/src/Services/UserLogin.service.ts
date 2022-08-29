import * as bcrypt from 'bcryptjs';
// import { tokenGenerator } from '../utils/jwtToken';
import ObjError from '../middlewares/objError';
import { IUserLoginRepository } from '../repositories/IUserLoginService.repository';
import { ILoginDTO } from '../repositoriesDTO/userLoginServiceDTO';

export default class UserLoginService {
  constructor(
    private usersLoginRepository: IUserLoginRepository,
  ) {}

  async execute(data: ILoginDTO) {
    const fields = data;
    if (!fields.email || !fields.password?.length) {
      throw new ObjError(400, 'All fields must be filled');
    }
    const emailAlreadyExists = await
    this.usersLoginRepository.findByEmail(data.email);
    if (!emailAlreadyExists) throw new ObjError(401, 'Incorrect email or password');

    const emailValidate = await bcrypt.compare(emailAlreadyExists.password, data.password);
    if (!emailValidate) throw new ObjError(401, 'Incorrect email or password');

    const token = this.usersLoginRepository.tokenGenerator(emailAlreadyExists);

    return token;
  }
}

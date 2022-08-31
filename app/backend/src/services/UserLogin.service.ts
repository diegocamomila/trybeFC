// import * as bcrypt from 'bcryptjs';
// import ObjError from '../middlewares/objError';
// import { IAuthDTO, ILoginDTO } from '../repositoriesDTO/userLoginServiceDTO';
// import JwtToken from '../utils/jwtToken';

// export default class UserLoginService {
//   static async validateLogin(data: ILoginDTO) {
//     const fields = data;
//     if (!fields.email || !fields.password?.length) {
//       throw new ObjError(400, 'All fields must be filled');
//     }
//     const emailAlreadyExists = await this.usersLoginRepository.findByEmail(data.email);
//     if (!emailAlreadyExists) throw new ObjError(401, 'Incorrect email or password');

//     const emailValidate = await bcrypt.compare(emailAlreadyExists.password, data.password);
//     if (!emailValidate) throw new ObjError(401, 'Incorrect email or password');

//     const token = JwtToken.tokenGenerator(emailAlreadyExists);

//     return token;
//   }

//   static async validatePassword(authorization: IAuthDTO) {
//     if (!authorization) throw new ObjError(401, 'Token must be a valid token');

//     const payload = JwtToken.checkToken(authorization);
//     if (!payload) throw new ObjError(401, 'Token must be a valid token');

//     return payload;
//   }
// }

import IUser from '../LoginService/loginDTO.service';

export default interface ILoginService {
  // checkFields(email: string, password: string): Promise<boolean>;
  checkUser(email: string): Promise<IUser | undefined>;
}

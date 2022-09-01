import IUserDTO from '../LoginService/userDTO.service';

export default interface ILoginService {
  // checkFields(email: string, password: string): Promise<boolean>;
  checkUser(email: string): Promise<IUserDTO | undefined>;
  // execute(request: Request, response: Response): Promise<Response>
}

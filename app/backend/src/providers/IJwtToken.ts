import IUser from '../services/LoginService/loginDTO.service';

export default interface IJwtToken {
  // checkFields(email: string, password: string): Promise<boolean>;

  tokenGenerator(user:Omit<IUser, 'password'>): string;

  checkToken(token: string, tokenUser:string): any;

  validatePassword(authorization: string): any;
}

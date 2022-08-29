import { IUserDTO } from '../repositoriesDTO/userLoginServiceDTO';
import User from '../database/models/user';

export interface IUserLoginRepository {
  findByEmail(email: string): Promise<User>;
  tokenGenerator(emailAlreadyExists: IUserDTO): Promise<User>;
}

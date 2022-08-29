// import { IAuthDTO } from '../repositoriesDTO/userLoginServiceDTO';

export interface IUserCheckRepository {
  validatePassword(data?: string): Promise<string []>;
}

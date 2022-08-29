import { ILoginDTO } from '../repositoriesDTO/userLoginServiceDTO';

export interface IUserPasswordRepository {
  validateLogin(data: ILoginDTO): Promise<string | number>;
}

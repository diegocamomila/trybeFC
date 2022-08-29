import User from '../database/models/user';

export interface IUserLoginRepository {
  findByEmail(email: string): Promise<User>;
}

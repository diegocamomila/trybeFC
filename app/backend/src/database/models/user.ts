import { Model, STRING } from 'sequelize';
import db from '.';

class User extends Model {
  public id: number;
  public username!: string;
  public role: string;
  public email:string;
  public password:string;
}

User.init({
  username: {
    type: STRING,
  },
  role: {
    type: STRING,
  },
  email: {
    type: STRING,
  },
  password: {
    type: STRING,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'users',
  timestamps: false,
});

export default User;

export type Login = {
  email: string;
  password: string;
};

export interface ILogin {
  email: string;
  password: string;
}

export type User = {
  id: number;
  username: string;
  role: string;
  email: string;
  password: string;
};

export interface IUser {
  id?: number;
  username: string;
  role: string;
  email: string;
  password: string;
}

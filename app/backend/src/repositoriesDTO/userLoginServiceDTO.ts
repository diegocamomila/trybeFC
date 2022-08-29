export interface ILoginDTO {
  email: string;
  password: string;
}

export interface IUserDTO extends ILoginDTO {
  id: number;
  username: string;
  role: string;
}

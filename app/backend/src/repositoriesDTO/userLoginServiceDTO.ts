export interface ILoginDTO {
  email: string;
  password: string;
}

export interface IUserDTO extends ILoginDTO {
  id: number;
  username: string;
  role: string;
}

export interface IAuthDTO {
  token: string;
  authorization?: string ;
  // header(name: 'set-cookie'): string[] | undefined;
  // get(name: 'set-cookie'): string[] | undefined;

}
// { (name: "set-cookie"): string[] | undefined; (name: string): string | undefined; }

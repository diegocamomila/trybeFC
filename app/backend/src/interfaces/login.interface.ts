export interface LoginDTO {
  email: string;
  password: string;
}

export interface UserDTO {
  id?: number;
  username: string;
  role: string;
  email: string;
  password: string;
}

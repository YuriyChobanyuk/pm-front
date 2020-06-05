import { IUser } from './user.interface';

export type LoginCredentials = {
  email: string;
  password: string;
};

export type SignUpCredentials = {
  email: string;
  password: string;
  name: string;
};

export type AuthResponse = { token: string; data: { user: IUser } };

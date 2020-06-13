import { LOGIN_USER, SIGN_UP_USER, LOGOUT_USER } from './types';
import { createAction } from '@reduxjs/toolkit';
import {
  LoginCredentials,
  SignUpCredentials,
} from '../../../interfaces/auth.interface';

export const loginUserAction = createAction(
  LOGIN_USER,
  (loginCredentials: LoginCredentials) => ({
    payload: {
      loginCredentials,
    },
  })
);

export const signUpUserAction = createAction(
  SIGN_UP_USER,
  (signUpCredentials: SignUpCredentials) => ({
    payload: {
      signUpCredentials,
    },
  })
);

export const logoutUserAction = createAction(LOGOUT_USER);

import { LOGIN_USER, SIGN_UP_USER, LOGOUT_USER, REFRESH_USER } from './types';
import { createAction } from '@reduxjs/toolkit';
import {
  LoginCredentials,
  SignUpCredentials,
} from '../../../../interfaces/auth.interface';

export { getUserAction, setUserAction, setUserErrorAction } from './authSlice';

export const loginUserAction = createAction<LoginCredentials>(LOGIN_USER);

export const signUpUserAction = createAction<SignUpCredentials>(SIGN_UP_USER);

export const refreshUserAction = createAction(REFRESH_USER);

export const logoutUserAction = createAction(LOGOUT_USER);

import appClient from '../appClient';
import { AxiosError, AxiosResponse } from 'axios';
import { decode } from 'jsonwebtoken';

import { IUser } from './../interfaces/user.interface';
import { LoginCredentials, AuthResponse } from '../interfaces/auth.interface';

class AuthService {
  private _refreshCalled = false;

  get refreshCalled() {
    return this._refreshCalled;
  }

  async loginRequest(
    loginCredentials: LoginCredentials
  ): Promise<AuthResponse> {
    return appClient
      .post('/auth/login', loginCredentials)
      .then((response: AxiosResponse<AuthResponse>) => response.data)
      .catch((error: AxiosError) => {
        console.error(error.message);
        throw error;
      });
  }

  async refreshRequest(): Promise<AuthResponse | undefined> {
    // to prevent multiple refresh requests
    if (this._refreshCalled) return;
    this._refreshCalled = true;

    return appClient
      .get('/auth/refresh')
      .then((response: AxiosResponse<AuthResponse>) => {
        this._refreshCalled = false;
        return response.data;
      })
      .catch((error: AxiosError) => {
        console.error(error.message);
        this._refreshCalled = false;
        throw error;
      });
  }

  getUserFromStorage(): IUser | null {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      let decoded: IUser;
      try {
        decoded = decode(accessToken) as IUser;
        return decoded;
      } catch (err) {
        console.error(`Access token decode error: ${err.message}`);
      }
    }

    return null;
  }
}

export default new AuthService();

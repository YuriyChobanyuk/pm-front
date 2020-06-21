import appClient from '../appClient';
import { AxiosError, AxiosResponse } from 'axios';
import { decode } from 'jsonwebtoken';

import { IUser } from '../interfaces/user.interface';
import { LoginCredentials, AuthResponse } from '../interfaces/auth.interface';

class AuthService {
  private _refreshCalled = false;

  get refreshCalled(): boolean {
    return this._refreshCalled;
  }

  set refreshCalled(refreshCalled: boolean) {
    this._refreshCalled = refreshCalled;
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

  refreshRequest: () => Promise<AuthResponse | undefined> = async () => {
    // to prevent multiple refresh requests
    if (this.refreshCalled) return;
    this.refreshCalled = true;

    const response = await appClient
      .get('/auth/refresh')
      .then((response: AxiosResponse<AuthResponse>) => {
        return response.data;
      })
      .catch((error: AxiosError) => {
        console.error(error.message);
        throw error;
      });

    this.refreshCalled = false;

    return response;
  };

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

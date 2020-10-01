import * as jwt from 'jsonwebtoken';
import {AccessTokenPayload} from "../interfaces";

class LocalStorageService {
  getAccessToken(): string | null {
    return localStorage.getItem('accessToken');
  }

  setAccessToken(token: string): void {
    localStorage.setItem('accessToken', token);
  }

  deleteAccessToken(): void {
    localStorage.removeItem('accessToken');
  }

  getTokenPayload(): AccessTokenPayload | null {
    const accessToken = this.getAccessToken();
    if (!accessToken) return null;
    return jwt.decode(accessToken) as AccessTokenPayload;
  }
}

export default new LocalStorageService();

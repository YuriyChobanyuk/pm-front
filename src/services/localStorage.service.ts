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
}

export default new LocalStorageService();

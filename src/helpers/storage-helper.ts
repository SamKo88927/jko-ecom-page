const itemKeys = {
  ACCESS_TOKEN: "ACCESS_TOKEN",
  REFRESH_TOKEN: "REFRESH_TOKEN",
};

class StorageHelper {
  public get(key: string): string | null {
    return localStorage.getItem(key);
  }

  public set(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  public remove(key: string): void {
    localStorage.removeItem(key);
  }

  public getAccessToken() {
    return this.get(itemKeys.ACCESS_TOKEN);
  }

  public setAccessToken(value: string) {
    this.set(itemKeys.ACCESS_TOKEN, value);
  }

  public removeAccessToken() {
    this.remove(itemKeys.ACCESS_TOKEN);
  }

  public getRefreshToken() {
    return this.get(itemKeys.REFRESH_TOKEN);
  }

  public setRefreshToken(value: string) {
    this.set(itemKeys.REFRESH_TOKEN, value);
  }

  public removeRefreshToken() {
    this.remove(itemKeys.REFRESH_TOKEN);
  }
}

export const storageHelper = new StorageHelper();

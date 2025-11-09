export class SignInResponseDto {
  accessToken: string; // 5 min
  refreshToken: string; // 1 month

  constructor(accessToken: string, refreshToken: string) {
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
  }
}

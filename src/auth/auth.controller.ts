import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInResponseDto } from './dto/sign-in-response.dto';
import { SignInDto } from './dto/sign-in.dto';
import { SignUpDto } from './dto/sign-up.dto';
import { RefreshTokenDto } from './dto/refresh-token.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-in')
  singIn(@Body() data: SignInDto): Promise<SignInResponseDto> {
    return this.authService.signIn(data);
  }

  @Post('sign-up')
  singUp(@Body() data: SignUpDto): Promise<SignInResponseDto> {
    return this.authService.signUp(data);
  }

  @Post('refresh-token')
  async refreshToken(
    @Body() data: RefreshTokenDto,
  ): Promise<SignInResponseDto> {
    return this.authService.refreshToken(data.token);
  }
}

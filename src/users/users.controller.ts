import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './dto/user.dto';
import { AuthGuard } from '../auth/auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get('me')
  @UseGuards(AuthGuard)
  async getMe(@Request() req): Promise<UserDto> {
    const user = await this.userService.getUserById(req.user?.id);
    return new UserDto(user);
  }
}

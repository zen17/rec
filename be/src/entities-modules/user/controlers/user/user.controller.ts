import { Controller, Get, Logger, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from '../../services/user/user.service';

@Controller('api')
export class UserController {

  constructor(private readonly userService: UserService) {
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  async getProfile(@Request() req) {
    Logger.log('profile route', req.user);
    return this.userService.findById(req.user.id);
  }

  @Get('fullprofile')
  async getFullProfile(@Request() req) {
    Logger.log('profile route', req.user);
    return this.userService.findFullUser(req.user.id);
  }
}

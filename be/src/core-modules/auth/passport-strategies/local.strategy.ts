import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../services/auth/auth.service';
import { User } from '../../../entities-modules/user/models/user';
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  async validate(name: string, password: string): Promise<User> {
    Logger.log(name);
    Logger.log(password);
    const user = await this.authService.validateUser(name, password);
    if (!user) {
      Logger.log('UnauthorizedException');
      throw new UnauthorizedException();
    }
    return user;
  }
}

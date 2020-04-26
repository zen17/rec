import { Injectable, Logger } from '@nestjs/common';
import { UserService } from '../../../../entities-modules/user/services/user/user.service';
import { User } from '../../../../entities-modules/user/models/user';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UserService,
    private readonly jwtService: JwtService) {
  }

  async validateUser(name: string, password: string): Promise<User> {
    const user = await this.usersService.findUserByNameAndPassword(name, password);
    if (user && user.password === password) {
      Logger.log(user);
      return user;
    }
    return null;
  }

  async loginAndAssignTokenToUser(user: User) {
    const payload = { username: user.firstName, id: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}

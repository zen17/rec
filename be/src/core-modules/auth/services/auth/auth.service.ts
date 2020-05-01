import {HttpException, HttpStatus, Injectable, Logger} from '@nestjs/common';
import {UserService} from '../../../../entities-modules/user/services/user/user.service';
import {User} from '../../../../entities-modules/user/models/user';
import {JwtService} from '@nestjs/jwt';
import {UserStatus} from "../../../../entities-modules/user/models/user.status.enum";

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UserService,
        private readonly jwtService: JwtService) {
    }

    async validateUser(email: string, password: string): Promise<User> {
        const user = await this.usersService.findUserByEmailAndPassword(email, password);
        if (user && user.password === password) {
            if (user.status === UserStatus.PENDING) {
                throw  new HttpException('Please go activate your account', HttpStatus.FORBIDDEN)
            } else {
                Logger.log(user);
                return user;
            }
        }
        return null;
    }

    async loginAndAssignTokenToUser(user: User) {
        const payload = {email: user.email, id: user.id};
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}

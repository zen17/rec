import {Controller, Post, Request, UseGuards} from '@nestjs/common';
import {AuthGuard} from '@nestjs/passport';
import {AuthService} from '../../services/auth/auth.service';
import {UserService} from '../../../../entities-modules/user/services/user/user.service';

@Controller('api')
export class AuthController {

    constructor(private readonly authService: AuthService, private readonly userService: UserService) {
    }

    @UseGuards(AuthGuard('local'))
    @Post('auth/login')
    async login(@Request() req) {
        return this.authService.loginAndAssignTokenToUser(req.user);
    }
}

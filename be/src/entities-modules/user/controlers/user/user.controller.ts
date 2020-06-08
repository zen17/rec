import {Body, Controller, Get, HttpException, HttpStatus, Logger, Post, Request, UseGuards} from '@nestjs/common';
import {AuthGuard} from '@nestjs/passport';
import {UserService} from '../../services/user/user.service';
import {JwtService} from '@nestjs/jwt';
import {MailService} from '../../../../core-modules/mail/mail/mail.service';
import {Mail} from '../../../../core-modules/mail/models/mail';

@Controller('api')
export class UserController {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService,
        private readonly mailService: MailService
    ) {
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('profile')
    async getProfile(@Request() req) {
        Logger.log('profile route', req.user);
        return this.userService.findById(req.user.id);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('fullprofile')
    async getFullProfile(@Request() req) {
        Logger.log('profile route', req.user);
        return this.userService.findFullUser(req.user.id);
    }

    @Post('createuser')
    async createUser(@Body() user) {
        user.birthDate = '1996-10-173333';
        const res = await this.userService.findUserByEmail(user);
        if (res) {
            throw new HttpException(
                'User with this mail already exist',
                HttpStatus.CONFLICT
            );
        } else {
            try {
                const responseUser = await this.userService.createUser(user);
                Logger.log('BREAK');
                const activationToken = await this.jwtService.sign(user);
                const mail = new Mail('Activation Mail', {firstName: user.firstName}, 'index', user.email, 'user_support@zengoup.com');
                await this.mailService.sendMail(mail);
                Logger.log(activationToken);
                return responseUser;
            } catch (e) {
                throw new HttpException(
                    'Something is wrong with request',
                    HttpStatus.BAD_REQUEST
                );
            }
        }
    }


    @Post('verifyuser')
    async verifyUser(@Body() req) {
        Logger.log('REQ');
        Logger.log(req.activationToken);
        const decodedToken = this.jwtService.decode(req.activationToken, {
            json: true
        });

        //  this.userService.verifyUser(decodedToken.id);
        Logger.log('DECODED TOKEN');
        Logger.log(decodedToken);
        return decodedToken;
        // this.userService.verifyUser(decodedToken.email);
    }
}

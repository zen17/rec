import {Body, Controller, Get, HttpException, HttpStatus, Logger, Post, Request, UseGuards} from '@nestjs/common';
import {AuthGuard} from '@nestjs/passport';
import {UserService} from '../../services/user/user.service';
import {JwtService} from '@nestjs/jwt';
import {MailerService} from '@nestjs-modules/mailer';

@Controller('api')
export class UserController {

    constructor(private readonly userService: UserService,
                private readonly jwtService: JwtService,
                private readonly mailerService: MailerService) {
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
        Logger.log('REQUEST BODY: ', );
        Logger.log(user);user
        user.birthDate = '1996-10-17';
        const res = await this.userService.findUserByEmail(user);
        Logger.log('REespoinse');
        Logger.log(res);
        if (res) {
            throw new HttpException('User with this mail already exist', HttpStatus.CONFLICT);
        } else {
            const responseUser = await this.userService.createUser(user);
            const activationToken = await this.jwtService.sign(user);
            Logger.log('activationToken');
            Logger.log(activationToken);
            this.mailerService
                .sendMail({
                to: 'nemanja.jocic.dev@gmail.com',
                    from: 'noreply@nestjs.com',
                    subject: 'Testing Nest Mailermodule with template ✔',
                    template: 'index', // The `.pug`, `.ejs` or `.hbs` extension is appended automatically.
                    context: {  // Data to be sent to template engine.
                    code: 'cf1a3f828287',
                        username: 'john doe',
                },
            })
                .then((success) => {
                    Logger.log('Success mail');
                    Logger.log(success);
                    return HttpStatus.OK;
                })
                .catch((err) => {
                    Logger.log('Error mail');
                    Logger.log(err);
                    return HttpStatus.FORBIDDEN;
                });
            return responseUser;
        }
    }

    @Post('verifyuser')
    async verifyUser(@Request() req) {
        const decodedToken = this.jwtService.decode(req.activationToken, {json: true});
        Logger.log('DECODED TOKEN');
        Logger.log(decodedToken);
        // this.userService.verifyUser(decodedToken.email);
    }
}

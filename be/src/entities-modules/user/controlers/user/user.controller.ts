import {Body, Controller, Get, HttpException, HttpStatus, Logger, Post, Request, UseGuards} from '@nestjs/common';
import {AuthGuard} from '@nestjs/passport';
import {UserService} from '../../services/user/user.service';
import {User} from "../../models/user";

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

    @UseGuards(AuthGuard('jwt'))
    @Get('fullprofile')
    async getFullProfile(@Request() req) {
        Logger.log('profile route', req.user);
        return this.userService.findFullUser(req.user.id);
    }

    @Post('createuser')
    async createUser(@Body() user) {
        Logger.log('REQUEST BODY: ', user);
        Logger.log(user);
        user.birthDate ='1996-10-17';
       const res = await this.userService.findUserByEmail(user);
        Logger.log('REespoinse');
        Logger.log(res);
        if(res) {
            throw new HttpException('User with this mail already exist', HttpStatus.CONFLICT );
        } else {
            return await this.userService.createUser(user);
        }
    }
}

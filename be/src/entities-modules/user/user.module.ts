import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {User} from './models/user';
import {UserService} from './services/user/user.service';
import {UserController} from './controlers/user/user.controller';
import {JwtModule} from '@nestjs/jwt';
import {PassportModule} from '@nestjs/passport';

@Module({
    imports: [TypeOrmModule.forFeature([User]),
        JwtModule.register({secret: 'secretKeyyfadfgsdfgsdfgsdfgsdfgsdfgsdgsdfgsdfgsdfg'}),
        PassportModule.register({})],
    controllers: [UserController],
    providers: [UserService],
    exports: [UserService],
})
export class UserModule {
}

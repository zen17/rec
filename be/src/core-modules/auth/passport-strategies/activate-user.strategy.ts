import {Injectable, Logger, UnauthorizedException} from "@nestjs/common";
import {PassportStrategy} from "@nestjs/passport";
import {Strategy} from "passport-local";
import {AuthService} from "../services/auth/auth.service";
import {User} from "../../../entities-modules/user/models/user";
import {ExtractJwt} from "passport-jwt";
import {jwtConstants} from "./constant";

@Injectable()
export class ActivateUserStrategy extends PassportStrategy(Strategy,'activate-user') {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: jwtConstants.secret,
        });
    }
    async validate(email: string, password: string) {
        //     Logger.log(email);
        //     Logger.log(password);
        //     const user = await this.authService.findUserByEmailAndPassword(email, password);
        //     if (!user) {
        //         Logger.log('UnauthorizedException');
        //         throw new UnauthorizedException();
        //     }
        //     return user;
         }
}

import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {DatabaseModule} from './core-modules/database/database.module';
import {AuthModule} from './core-modules/auth/auth.module';
import {UserModule} from './entities-modules/user/user.module';
import {BusinessModule} from './entities-modules/business/business.module';
import {CommentModule} from './entities-modules/comment/comment.module';
import {GcpModule} from './core-modules/gcp/gcp.module';
import {MailModule} from './core-modules/mail/mail.module';

@Module({
    imports: [DatabaseModule, AuthModule, UserModule, BusinessModule, CommentModule, GcpModule,
        MailModule], controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}

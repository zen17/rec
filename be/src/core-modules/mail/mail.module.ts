import {Module} from '@nestjs/common';
import {MailerModule} from '@nestjs-modules/mailer';
import {PugAdapter} from '@nestjs-modules/mailer/dist/adapters/pug.adapter';
import {MailService} from './mail/mail.service';
import {MailController} from './controllers/mail.controller';
import {envConfiguration} from '../envconfiguration/models/envconfiguration';
import {HandlebarsAdapter} from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

@Module({
    imports: [
        MailerModule.forRoot({
            transport: {
                service: 'gmail',
                auth: {
                    user: envConfiguration.getEmailUser(), // generated ethereal user
                    pass: envConfiguration.getEmailPassword()// generated ethereal password
                },
            },
            defaults: {
                sentFrom: envConfiguration.getEmailSentForm(), // outgoing email ID
            },
            template: {
                dir: "src/core-modules/mail/templates",
                adapter: new HandlebarsAdapter(), // or new PugAdapter()
                options: {
                    strict: true,
                },
            },
        }),
    ], providers: [MailService],
    controllers: [MailController],
})
export class MailModule {
}

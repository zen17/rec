import {Injectable, Logger} from '@nestjs/common';
import {MailerService} from '@nestjs-modules/mailer';
import {Mail} from '../models/mail';

@Injectable()
export class MailService {
    constructor(private readonly mailerService: MailerService) {
    }

    async sendMail(mail: Mail) {
        try {
            await this.mailerService
                .sendMail({
                    to: mail.toEmail,
                    from: mail.from,
                    subject: mail.subject,
                    template: mail.template, // The `.pug`, `.ejs` or `.hbs` extension is appended automatically.
                    context: mail.context,
                });
        } catch (e) {
            Logger.log('MAIL EXCEPTION ' + e);
        }

    }
}

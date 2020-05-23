import {Controller, Get, HttpStatus, Logger} from '@nestjs/common';
import {MailerService} from "@nestjs-modules/mailer";

@Controller('mail')
export class MailController {
    constructor(private mailerService: MailerService) {
    }

    @Get('sendtestmail') sendTestMail() {
        this.mailerService
            .sendMail({
                to: 'nemanja.jocic@miticon.com', // List of receivers email address
                from: 'od mene be familijo', // Senders email address
                subject: 'Familijooooooooo', // Subject line
                text: 'Burazerce cao', // plaintext body
                html: '<b>Cao cao burazerce</b>', // HTML body content
            })
            .then((success) => {
                return HttpStatus.OK;
                Logger.log(success)
            })
            .catch((err) => {
                return HttpStatus.FORBIDDEN;
                Logger.log(err)
            });
    }
}

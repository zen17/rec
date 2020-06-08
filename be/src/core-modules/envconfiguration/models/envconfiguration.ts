import {Logger} from "@nestjs/common";

export class Envconfiguration {

    private static envConfiguration: Envconfiguration
    private conf = {
        host: 'localhost',
        port: 5432,
        username: 'root',
        password: 'recpass',
        dbame: 'rec_local_db',
        emailHost: 'localhost',
        emailUser: 'jocicn17@gmail.com',
        emailPort: 5432,
        emailId: 'root',
        emailPassword: 'Blablabla17!',
        sentFrom: '"Nest Test <mail@mail>"',
        emailService: 'gmail'
    };

    private constructor() {
        Logger.log('ENV ---------->>' + process.env.ENV);
        if (process.env.ENV === 'DEV') {
            Logger.log('USLOOOOOOOOO');
            this.conf = {
                host: 'localhost',
                port: 5432,
                username: 'root',
                password: 'recpass',
                dbame: 'rec_local_db',
                emailHost: 'localhost',
                emailUser: 'jocicn17@gmail.com',
                emailPort: 5432,
                emailId: 'root',
                emailPassword: 'Blablabla17!',
                sentFrom: '"Nest Test <mail@mail>"',
                emailService: 'gmail'
            };
        } else if (process.env.ENV === 'PRD') {
            Logger.log('USLOOOOOOOOO u PRD ' + process.env.DB_PASSWORD);
            this.conf = {
                host: '35.228.95.5',
                port: 5432,
                username: 'postgres',
                password: process.env.DB_PASSWORD,
                dbame: 'postgres',
                emailHost: 'localhost',
                emailUser: 'jocicn17@gmail.com',
                emailPort: 5432,
                emailId: 'root',
                emailPassword: 'Blablabla17!',
                sentFrom: '"Nest Test <mail@mail>"',
                emailService: 'gmail'
            };
        }
        Logger.log('CONSTRUCTOR CONF');
        Logger.log('USLOOOOOOOOO u PRD ' + process.env.ENV + '  ' + process.env.DB_PASSWORD);
        Logger.log(this.conf)
    }

    public static getSingletonInstance() {
        Logger.log('SINGLETON CONF');
        if (this.envConfiguration) {
            return this.envConfiguration;
        } else {
            return new Envconfiguration();
        }
    }

    getUsernameDB() {
        Logger.log('USERNAME CONF');
        return this.conf.username;
    }

    getPasswordDB() {
        Logger.log('PASS CONF');

        return this.conf.password;
    }

    getHostDB() {
        Logger.log('HOST CONF');
        return this.conf.host;
    }

    getNameOfDB() {
        Logger.log('HOST CONF');
        return this.conf.dbame;
    }

    getEmailHost() {
        return this.conf.emailHost;
    }

    getEmailUser() {
        return this.conf.emailUser;
    }

    getEmailId() {
        return this.conf.emailId;
    }

    getEmailPassword() {
        return this.conf.emailPassword;
    }

    getEmailPort() {
        return this.conf.emailPort;
    }

    getEmailSentForm() {
        return this.conf.sentFrom;
    }

    getEmailService() {
        return this.conf.emailService;
    }
}

export let envConfiguration = Envconfiguration.getSingletonInstance();
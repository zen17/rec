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
        sentFrom: '"Nest Test <mail@mail>"'
    };

    private constructor() {
        if (process.env.ENV === 'DEV') {
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
                sentFrom: '"Nest Test <mail@mail>"'
            };
        } else if (process.env.ENV === 'PRD') {
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
                sentFrom: '"Nest Test <mail@mail>"'
            };
        }
        Logger.log('CONSTRUCTOR CONF');
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
}

export let envConfiguration = Envconfiguration.getSingletonInstance();
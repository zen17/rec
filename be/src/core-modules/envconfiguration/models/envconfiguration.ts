import { Logger } from "@nestjs/common";

export class Envconfiguration {

    private static envConfiguration: Envconfiguration
    private conf = {
        host: 'localhost',
        port: 5432,
        username: 'root',
        password: 'recpass',
        dbame: 'rec_local_db'
    };
    private constructor() {
        if (process.env.ENV === 'DEV') {
            this.conf = {
                host: 'localhost',
                port: 5432,
                username: 'root',
                password: 'recpass',
                dbame: 'rec_dev_db'
            };
        } else if (process.env.ENV === 'PRD') {
            this.conf = {
                host: '35.228.95.5',
                port: 5432,
                username: 'postgres',
                password: process.env.DB_PASSWORD,
                dbame: 'postgres'
            };
        }
        Logger.log('CONSTRUCTOR CONF');
        Logger.log(this.conf)
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

    public static getSingletonInstance() {
        Logger.log('SINGLETON CONF');
        if (this.envConfiguration) {
            return this.envConfiguration;
        } else {
            return new Envconfiguration();
        }

    }
}

export let envConfiguration = Envconfiguration.getSingletonInstance();
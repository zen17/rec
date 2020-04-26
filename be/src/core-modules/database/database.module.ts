import {Logger, Module} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../entities-modules/user/models/user';
import { Business } from '../../entities-modules/business/models/business';
import { Comment } from '../../entities-modules/comment/models/comment';
import { envConfiguration } from '../envconfiguration/models/envconfiguration';

// @Module({
//   imports: [TypeOrmModule.forRoot({
//     type: 'postgres',
//     host: 'localhost',
//     port: 5432,
//     username: 'root',
//     password: 'recpass',
//     database: 'recdb',
//     entities: [User, Business, Comment],
//     synchronize: true,
//   })],
// })
@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: envConfiguration.getHostDB(),
    port: 5432,
    username: envConfiguration.getUsernameDB(),
    password: envConfiguration.getPasswordDB(),
    database: envConfiguration.getNameOfDB(),
    entities: [User, Business, Comment],
    synchronize: true,
  })],
})
export class DatabaseModule {

  constructor(){
    Logger.log('HOST  IN MODULE' + envConfiguration.getHostDB())
  }
}



import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../models/user';

@Injectable()
export class UserService {
  private readonly user: User;

  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {
    this.user = new User();
  }

  findUserByNameAndPassword(name: string, password: string): Promise<User> {
    this.user.firstName = name;
    this.user.password = password;
    return this.userRepository.findOne(this.user);
  }

  findById(id: number): Promise<User> {
    Logger.log('ID from token: ' + id);
    return this.userRepository.findOne(id);
  }

  findFullUser(id: number): Promise<any> {
    Logger.log('ID from token: ' + id);
    return this.userRepository.find({relations: ["businesList"]});
  }
}

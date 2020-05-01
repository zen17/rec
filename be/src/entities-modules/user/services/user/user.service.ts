import {Injectable, Logger} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {User} from '../../models/user';

@Injectable()
export class UserService {
    private readonly user: User;

    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {
        this.user = new User();
    }

    async findUserByNameAndPassword(name: string, password: string): Promise<User> {
        this.user.firstName = name;
        this.user.password = password;
        return await this.userRepository.findOne(this.user);
    }

    async findById(id: number): Promise<User> {
        Logger.log('ID from token: ' + id);
        return await this.userRepository.findOne(id);
    }

    async findFullUser(id: number): Promise<any> {
        Logger.log('ID from token: ' + id);
        return await this.userRepository.find({relations: ["businesList"]});
    }

    async createUser(user: User) {
        return await this.userRepository.save(user);
    }

    async findUserByEmail(user: User): Promise<User> {
        return await this.userRepository.findOne({where: {email: user.email}});
    }

    async findUserByEmailAndPassword(email: string, password: string): Promise<User> {
        return await this.userRepository.findOne({where: {email: email, password: password}});
    }
}

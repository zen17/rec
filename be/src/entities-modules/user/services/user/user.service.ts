import {Injectable, Logger} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {User} from '../../models/user';
import {UserStatus} from '../../models/user.status.enum';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {
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

    async verifyUser (id: number) {
        return  await  this.userRepository
            .createQueryBuilder()
            .update(User)
            .set({
                status: UserStatus.ACTIVE ,
            })
            .where("id = :id", { id: id })
            .execute();
    }
}

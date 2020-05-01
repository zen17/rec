import {Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {Business} from '../../business/models/business';
import {Comment} from '../../comment/models/comment';
import {Exclude} from 'class-transformer';
import {Root} from '../../../core-modules/common/models/root';
import {UserStatus} from "./user.status.enum";

@Entity()
export class User extends Root {

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    email: string;

    @Exclude()
    @Column('text')
    password: string;

    @Column('text')
    avatarUrl = 'https://www.banklesstimes.com/wp-content/uploads/2018/07/avatar-icon-3.png';

    @CreateDateColumn()
    creationDate;

    @Column('text')
    city: string;

    @Column('text')
    country: string;

    @Column('numeric')
    zip: number;

    @Column('text')
    gender: string;

    @Column('date')
    birthDate;

    @Column({
        type: "enum",
        enum: UserStatus,
        default: UserStatus.PENDING
    })
    status: UserStatus;

    @OneToMany(type => Business, businesses => businesses.user)
    businesses: Business[];

    @OneToMany(type => Comment, comments => comments.user)
    comments: Comment[];
}

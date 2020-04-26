import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../user/models/user';
import { Business } from '../../business/models/business';
import { Root } from '../../../core-modules/common/models/root';

@Entity()
export class Comment extends Root {

    @Column('text')
    text: string;

    @Column('text', { array: true })
    photoUrls: string[];

    @Column('int')
    qualityMark: number;

    @Column('int', { default: 0 })
    usefulMark: number;

    @Column('int', { default: 0 })
    unUsefulMark: number;

    @CreateDateColumn()
    creationDate;

    @ManyToOne(type => User, user => user.comments)
    user: User;

    @ManyToOne(type => Business, business => business.comments)
    business: Business;
}

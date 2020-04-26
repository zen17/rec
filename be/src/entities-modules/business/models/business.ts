import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../user/models/user';
import { Comment } from '../../comment/models/comment';
import { Root } from '../../../core-modules/common/models/root';

@Entity()
export class Business extends Root {

  @Column()
  title: string;

  @Column('text')
  description: string;

  @Column()
  address: string;

  @Column('decimal')
  latitude: number;

  @Column('decimal')
  longitude: number;

  @Column('int')
  phoneNumber: number;

  @Column('text')
  thumbUrl: string;

  @Column('text', { array: true })
  imageUrls: string[];

  @Column('int')
  qualityMark: number;

  @CreateDateColumn()
  creationDate;

  @ManyToOne(type => User, user => user.businesses)
  user: User;

  @OneToMany(type => Comment, comments => comments.business)
  comments: Comment[];
  
  commentCount: number;

}

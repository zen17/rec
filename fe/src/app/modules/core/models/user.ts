import { Root } from '../../core/models/root';
import { Comment } from './comment';
import { Deserialize } from './deserialize.interface';
import { BusinessList } from './business-list';
import { CommentList } from './comment-list';
import { Business } from './business';

export class User extends Root implements Deserialize {

  firstName: string;
  lastName: string;
  email: string;
  avatarUrl: string;
  creationDate: Date;
  businessesList: BusinessList;
  commentsList: CommentList;

  constructor(businesList?:BusinessList, commentList?: CommentList) {
    super();
    this.businessesList = businesList;
    this.commentsList = commentList;
  }

  public deserialze(userDto) {
    console.log('USER DTO', userDto);
    this.firstName = userDto.firstName;
    this.lastName = userDto.lastName;
    this.email = userDto.email;
    this.avatarUrl = userDto.avatarUrl;
    this.creationDate = new Date(userDto.creationDate);

    if (userDto.commentsList && this.commentsList ) {
      userDto.commentsList.forEach(commentDto => {
        let comment = new Comment();
        comment.deserialze(commentDto);
        this.commentsList.add(comment);
      });
    }

    if (userDto.businessesList && this.businessesList) {
      userDto.businessesList.forEach(businessDto => {
        let business = new Business();
        business.deserialze(businessDto);
        this.businessesList.add(business);
      });
    }
  }
}

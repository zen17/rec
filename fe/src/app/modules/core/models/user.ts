import {Root} from '../../core/models/root';
import {Comment} from './comment';
import {Deserialize} from './deserialize.interface';
import {BusinessList} from './business-list';
import {CommentList} from './comment-list';
import {Business} from './business';

export class User extends Root implements Deserialize {

    //   firstName: string;
    //   lastName: string;
    // email: string;
    // avatarUrl: string;
    // creationDate: Date;
    // businessesList: BusinessList;
    //  commentsList: CommentList;

    constructor(public firstName = '',
                public lastName = '',
                public email = '',
                public avatarUrl = '',
                public city = '',
                public country = '',
                public zip = '',
                public gender = '',
                public creationDate = null,
                public businessList = new BusinessList(),
                public commentList = new CommentList()) {
        super();
    }

    public deserialze(userDto) {
        console.log('USER DTO', userDto);
        this.firstName = userDto.firstName;
        this.lastName = userDto.lastName;
        this.email = userDto.email;
        this.avatarUrl = userDto.avatarUrl;
        this.creationDate = new Date(userDto.creationDate);

        if (userDto.commentsList && this.commentList) {
            userDto.commentsList.forEach(commentDto => {
                const comment = new Comment();
                comment.deserialze(commentDto);
                this.commentList.add(comment);
            });
        }

        if (userDto.businessesList && this.businessList) {
            userDto.businessesList.forEach(businessDto => {
                const business = new Business();
                business.deserialze(businessDto);
                this.businessList.add(business);
            });
        }
    }
}

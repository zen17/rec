import {Root} from './root';
import {Comment} from './comment';
import {Deserialize} from './deserialize.interface';
import {BusinessList} from './business-list';
import {CommentList} from './comment-list';
import {Business} from './business';
import {IUser} from "./user.interface";

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
                public password = '',
                public avatarUrl = '',
                public city = '',
                public country = '',
                public zip = 0,
                public gender = '',
                public creationDate = null,
                public birthDate = null,
                public businessList = new BusinessList(),
                public commentList = new CommentList()) {
        super();
    }

    public deserialize(userDto: IUser) {
        console.log('USER DTO', userDto);
        this.firstName = userDto.firstName;
        this.lastName = userDto.lastName;
        this.email = userDto.email;
        this.avatarUrl = userDto.avatarUrl;
        this.creationDate = new Date(userDto.creationDate);
        this.city = userDto.city;
        this.country = userDto.country;
        this.zip = userDto.zip;
        this.gender = userDto.gender;
        this.birthDate = userDto.birthDate;

        if (userDto.commentList && this.commentList) {
            userDto.commentList.elements.forEach(commentDto => {
                const comment = new Comment();
                comment.deserialize(commentDto as Comment);
                this.commentList.add(comment);
            });
        }

        if (userDto.businessList && this.businessList) {
            userDto.businessList.elements.forEach(businessDto => {
                const business = new Business();
                business.deserialize(businessDto as Business);
                this.businessList.add(business);
            });
        }
        return this;
    }
}

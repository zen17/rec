import {BusinessList} from './business-list';
import {CommentList} from './comment-list';

export interface IUser {
    firstName: string;
    lastName: string;
    email: string;
    avatarUrl: string;
    city: string;
    country: string;
    zip: number;
    gender: string;
    creationDate: string;
    birthDate: string;
    businessList: BusinessList;
    commentList: CommentList;
}

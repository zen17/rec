import { Root } from '../../core/models/root';
import { Business } from './business';
import { User } from './user';
import { Deserialize } from './deserialize.interface';
import { IComment } from './comment-interface';

export class Comment extends Root implements Deserialize, IComment {

    text: string;
    photoUrls: string[];
    qualityMark: number;
    usefulMark: number;
    unUsefulMark: number;
    user: User;
    business: Business;

    constructor(user?: User, business?: Business) {
        super();
        this.user = user;
        this.business = business;
    }

    public deserialze(comment: Comment) {
        this.id = comment.id;
        this.text = comment.text;
        this.photoUrls = comment.photoUrls;
        this.qualityMark = comment.qualityMark;
        this.unUsefulMark = comment.unUsefulMark;
        this.usefulMark = comment.usefulMark;

        if (comment.user && this.user) {
            this.user.deserialze(comment.user);
        }
        if (comment.business && this.business) {
            this.business.deserialze(comment.business);
        }
    }

}

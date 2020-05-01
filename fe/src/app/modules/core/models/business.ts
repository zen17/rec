import { BusinessService } from '../services/business.service';
import { ServicesDependencyInjection } from '../../core/models/services-dependency-injection';
import { Root } from '../../core/models/root';
import { Comment } from './comment';
import { User } from './user';
import { Deserialize } from './deserialize.interface';
import { CommentList } from './comment-list';

export class Business extends Root implements Deserialize {

    title: string;
    description: string;
    address: string;
    latitude: number;
    longitude: number;
    phoneNumber: number;
    thumbUrl: string;
    imageUrls: string[];
    qualityMark: number;
    creationDate;
    user: User;
    commentList: CommentList;
 //   businessService: BusinessService;

    constructor(user?: User, commentList?: CommentList ) {
        super();
        this.user = user;
        this.commentList = commentList;
      //  this.businessService = ServicesDependencyInjection.injector.get(BusinessService);
    }

    public deserialize(businesDto) {
        this.id = +businesDto.id;
        this.title = businesDto.title;
        this.description = businesDto.description;
        this.address = businesDto.address;
        this.latitude = +businesDto.latitude;
        this.longitude = +businesDto.longitude;
        this.phoneNumber = businesDto.phoneNumber;
        this.thumbUrl = businesDto.thumbUrl;
        this.imageUrls = businesDto.imageUrls;
        this.qualityMark = +businesDto.qualityMark;
        this.creationDate = new Date(businesDto.creationDate);
        if (businesDto.user && this.user) {
            this.user.deserialize(businesDto.user);
        }

        if (businesDto.comments) {
            businesDto.comments.forEach(commentDto => {
                let comment = new Comment(this.user);
                comment.deserialize(commentDto);
                this.commentList.add(comment);
            });
        }
       return this;
    }


    // public loadById(id: number, onSucces?: (response) => void, onError?: (error) => void) {
    //     this.apiLoading = true;
    //     this.businessService.loadById(id).subscribe(response => {
    //         console.log(response)
    //         this.deserialze(response);
    //         this.setApiSuccess();
    //         if (onSucces) {
    //             onSucces(response);
    //         }
    //     }, error => {
    //         this.setApiError();
    //         if (onError) {
    //             onError(error);
    //         }
    //     });
    // }

    public test() {
        console.log('RADI LI OVO ?')
    }

    public getTitle() {
        console.log('TITLE,', this.title);
    }

}
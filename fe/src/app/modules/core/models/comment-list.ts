import { List } from './list';
import { Deserialize } from './deserialize.interface';
import { Comment } from './comment';

export class CommentList extends List implements Deserialize {

    deserialize(commentListDto: CommentList) {
        this.pagination.deserialize(commentListDto.pagination);
        commentListDto.elements.forEach(elementDto => {
            let element = new Comment();
            element.deserialize(elementDto as Comment);
            this.elements.push(element)
        })
    }

}
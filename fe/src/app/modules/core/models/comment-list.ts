import { List } from './list';
import { Deserialize } from './deserialize.interface';
import { Comment } from './comment';

export class CommentList extends List implements Deserialize {

    deserialze(commentListDto: CommentList) {
        this.pagination.deserialze(commentListDto.pagination);
        commentListDto.elements.forEach(elementDto => {
            let element = new Comment();
            element.deserialze(elementDto as Comment);
            this.elements.push(element)
        })
    }

}
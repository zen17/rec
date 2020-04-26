import { Controller, Get, Param } from '@nestjs/common';
import { CommentList } from '../../models/comment-list';
import { Pagination } from '../../../../core-modules/common/models/pagination';
import { CommentService } from '../../services/comment/comment.service';

@Controller('api')
export class CommentController {
    commentList: CommentList;
    pagination: Pagination;

    constructor(private readonly commentService: CommentService) {
    }


    @Get('commentlist/:id/:pageNumber/:elementsPerPage')
    async getCommentListById(@Param('id') id: number, @Param('pageNumber') pageNumber: number, @Param('elementsPerPage') elementsPerPage: number) {
        this.pagination = new Pagination();
        this.pagination.pageNumber = +pageNumber;
        this.pagination.elementsPerPage = +elementsPerPage;
        const response = await this.commentService.getCommentListById(id, this.pagination)
        this.commentList = new CommentList();
        if (response.length > 0) {
            this.commentList.elements = response[0];
            this.pagination.totalElements = response[1];
            this.pagination.calcualateTotalPagesNumber();
            this.commentList.pagination = this.pagination;
        }
        return this.commentList;
    }
}


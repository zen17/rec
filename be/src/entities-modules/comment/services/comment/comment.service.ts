import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from '../../models/comment';
import { Repository } from 'typeorm';
import { Pagination } from '../../../../core-modules/common/models/pagination';

@Injectable()
export class CommentService {

  constructor(@InjectRepository(Comment) private readonly commentRepository: Repository<Comment>) {
  }

  async getCommentListById(id: number, pagination: Pagination): Promise<[Comment[], number]> {
    return await this.commentRepository
      .createQueryBuilder('comments')
      .leftJoinAndSelect('comments.user', 'commentsUsers')
      .orderBy('comments.id', 'DESC')
      .skip(pagination.elementsPerPage * pagination.pageNumber)
      .take(pagination.elementsPerPage)
      .getManyAndCount();
  }
}

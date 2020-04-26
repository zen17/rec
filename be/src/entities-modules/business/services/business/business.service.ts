import { Injectable, Logger } from '@nestjs/common';
import { Business } from '../../models/business';
import { InjectRepository } from '@nestjs/typeorm';
import { Pagination } from '../../../../core-modules/common/models/pagination';
import { BusinessRepository } from '../../repository/business-repository';
import { CommentService } from '../../../comment/services/comment/comment.service';
import { Root } from 'src/core-modules/common/models/root';


@Injectable()
export class BusinessService {
  constructor(@InjectRepository(Business) private readonly businessRepository: BusinessRepository,
    private readonly commentService: CommentService) {
  }


  // not using
  async  getBusinessWithCommentsById(id: number) {
    // return await this.businessRepository.query(
    // `SELECT *, (SELECT COUNT('comment.id')
    // FROM public.comment
    // WHERE public.comment."businessId" = 1)
    // FROM public.business
    // LEFT JOIN public.comment ON public.comment."businessId" = public.business."id"
    // LEFT JOIN public.user ON public.comment."userId" = public.user."id"
    // WHERE public.business.id = 1;`)
    return await this.businessRepository
      .createQueryBuilder('business')
      .leftJoinAndSelect('business.comments', 'businessComment')
      .leftJoinAndSelect('business.user', 'businessCommentUser')
      .where('business.id =' + id)
      .getOne();
  }

  // not using
  async getBusinessList(pagination: Pagination): Promise<[ Partial<Business[]>, number]> {
    return await this.businessRepository
      .createQueryBuilder('business')
      .leftJoinAndSelect('business.comments', 'businessComment')
      .leftJoinAndSelect('businessComment.user', 'businessCommentUser')
      .skip(pagination.elementsPerPage * pagination.pageNumber)
      .take(pagination.elementsPerPage)
      .getManyAndCount();
    // return await this.businessRepository
    // .query(`SELECT *, (SELECT COUNT('business.id')
    // FROM public.business)
    // FROM public.business
    // LEFT JOIN public.comment ON public.comment."businessId" = public.business."id"
    // LEFT JOIN public.user ON public.comment."userId" = public.user."id"
    // LIMIT ${pagination.elementsPerPage} OFFSET ${pagination.elementsPerPage * pagination.pageNumber};`)
  }

  async getBusinessPartialDataList(pagination: Pagination): Promise<Partial<any[]>> {
    return await this.businessRepository
      .query(`SELECT * ,
      (SELECT COUNT(*) as "businessCount" FROM public.business ),
      (SELECT COUNT(c.id) as "commentsCount" FROM public.comment as c WHERE c."businessId" = b.id)
      FROM public.business as b 
      ORDER BY b.id DESC 
      OFFSET ${pagination.elementsPerPage * pagination.pageNumber} 
      FETCH NEXT ${pagination.elementsPerPage} ROWS ONLY;`)
  }

  //not using
  async getBusiness(businessId: number) {
    return await this.businessRepository.findOne(businessId);
  }

}

import { Module } from '@nestjs/common';
import { Business } from './models/business';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BusinessController } from './controlers/business/business.controller';
import { BusinessService } from './services/business/business.service';
import { CommentModule } from '../comment/comment.module';

@Module({
  imports: [TypeOrmModule.forFeature([Business]), CommentModule],
  controllers: [BusinessController],
  providers: [BusinessService],
  exports: [BusinessService],
})
export class BusinessModule {
}

import { Controller, Get, Logger, Param, UseGuards } from '@nestjs/common';
import { BusinessService } from '../../services/business/business.service';
import { AuthGuard } from '@nestjs/passport';
import { Pagination } from '../../../../core-modules/common/models/pagination';
import { BusinessList } from '../../models/business-list';

@Controller('api')
export class BusinessController {

  businessList: BusinessList;
  pagination: Pagination;

  constructor(private readonly businessService: BusinessService) {
  }


  //not using

  @UseGuards(AuthGuard('jwt'))
  @Get('business/:id')
  async getBusinessById(@Param('id') id: number) {
    const response = await this.businessService.getBusiness(id);
    return response;
  }

  //not using
  @UseGuards(AuthGuard('jwt'))
  @Get('fullbusiness/:id')
  async getBusinessWithCommentsById(@Param('id') id: number) {
    const response = await this.businessService.getBusinessWithCommentsById(id);
    return response;
  }

  //not using
  @UseGuards(AuthGuard('jwt'))
  @Get('businesslist/:pageNumber/:elementsPerPage')
  async getBusinessList(@Param('pageNumber') pageNumber: number, @Param('elementsPerPage') elementsPerPage: number) {
    this.pagination = new Pagination();
    this.pagination.pageNumber = +pageNumber;
    this.pagination.elementsPerPage = +elementsPerPage;
    const response = await this.businessService.getBusinessList(this.pagination);
    this.businessList = new BusinessList();
    this.businessList.elements = response[0];
    this.pagination.totalElements = response[1];
    this.pagination.totalPages = Math.floor(this.pagination.totalElements / this.pagination.elementsPerPage);
    this.businessList.pagination = this.pagination;
    return this.businessList;
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('businesslistpartialdata/:pageNumber/:itemsPerPage')
  async getBusinessPartialDataList(@Param('pageNumber') pageNumber: number, @Param('itemsPerPage') elementsPerPage: number) {
    this.pagination = new Pagination();
    this.pagination.pageNumber = +pageNumber;
    this.pagination.elementsPerPage = +elementsPerPage;
    const response = await this.businessService.getBusinessPartialDataList(this.pagination);
    this.businessList = new BusinessList();
    this.businessList.elements = response;
    this.pagination.totalElements = 0;
    if (response.length > 0) {
      this.pagination.totalElements = +response[0].businessCount;
    }
    this.pagination.calcualateTotalPagesNumber();
    this.businessList.pagination = this.pagination;
    return this.businessList;
  }

}

import { Root } from './root';
import { Deserialize } from './deserialize.interface';

export class Pagination implements Deserialize {

    pageNumber: number;
    elementsPerPage: number;
    totalElements: number;
    totalPages: number;
    firstPageFlg: boolean;
    lastPageFlg: boolean;
    // public sortSettings: SortSetting[];

    constructor() {
        this.pageNumber = 0;
        this.totalPages = 0;
        this.elementsPerPage = 2;
        this.totalElements = 0;
        this.firstPageFlg = true;
        this.lastPageFlg = false;
        //  this.sortSettings = [];
    }

    public deserialize(paginationDto: Pagination) {
        this.pageNumber = paginationDto.pageNumber;
        this.totalPages = paginationDto.totalPages;
        this.elementsPerPage = paginationDto.elementsPerPage;
        this.totalElements = paginationDto.totalElements;
        this.firstPageFlg = paginationDto.firstPageFlg;
        this.lastPageFlg = paginationDto.lastPageFlg;
    }


}

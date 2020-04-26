import { SortSetting } from '../models/sort-setting';

export class Pagination {

  pageNumber: number;
  elementsPerPage: number;
  totalElements: number;
  totalPages: number;
  firstPageFlg: boolean;
  lastPageFlg: boolean;

  // sortSettings: SortSetting[];

  constructor() {
    this.pageNumber = 0;
    this.totalPages = 1000;
    this.elementsPerPage = 10;
    this.totalElements = 10000;
    this.firstPageFlg = true;
    this.lastPageFlg = false;
    // this.sortSettings = [];
  }

  public calcualateTotalPagesNumber() {
    if (this.totalElements % this.elementsPerPage === 0) {
      this.totalPages = this.totalElements / this.elementsPerPage - 1;
    } else {
      this.totalPages = Math.floor(this.totalElements / this.elementsPerPage);
    }
  }

}

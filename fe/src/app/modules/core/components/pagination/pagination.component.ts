import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pagination } from '../../models/pagination';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  public faIcons = {
    faAngleLeft: faAngleLeft,
    faAngleRight: faAngleRight
  }

  @Input() set Pagination(pagination: Pagination) {
    this.pagination = pagination;
  }
  @Output() paginationChanged = new EventEmitter();
  pageNumber = 1;
  pagination: Pagination;

  constructor() {
  }

  ngOnInit(): void {
  }

  onPageChange(pageNumber) {
    this.pagination.pageNumber = pageNumber - 1;
    this.paginationChanged.emit();
  }

}
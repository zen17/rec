import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './components/pagination/pagination.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [PaginationComponent],
  imports: [
    CommonModule,
    NgbPaginationModule,
    FontAwesomeModule
  ],
  exports: [PaginationComponent]
})
export class CoreModule { }

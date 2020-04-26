import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from '../../app-routing.module';
import { SearchFilterComponent } from './components/search-filter/search-filter.component';



@NgModule({
  declarations: [NavbarComponent, SearchFilterComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    NavbarComponent, SearchFilterComponent
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';

import { ListWithPagintonComponent } from './pages/list-with-paginton/list-with-paginton.component';
import { BusinessProfileComponent } from './pages/business-profile/business-profile.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from '../core/core.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GoogleMapsModule } from "@angular/google-maps";  
import { SharedModule } from '../shared/shared.module';
import { SmallCardComponent } from './components/small-card/small-card.component';

@NgModule({
  declarations: [HomePageComponent, CardComponent, ListWithPagintonComponent, BusinessProfileComponent, SmallCardComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    NgbModule,
    CoreModule,
    FontAwesomeModule,
    GoogleMapsModule,
    SharedModule
  ],
  exports: [HomePageComponent, CardComponent, ListWithPagintonComponent]
})
export class ReviewModule { }

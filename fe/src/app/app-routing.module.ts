import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './modules/review/pages/home-page/home-page.component';
import { LoginPageComponent } from './modules/auth/pages/login-page/login-page.component';
import { UserProfilePageComponent } from './modules/auth/pages/user-profile-page/user-profile-page.component';
import { AuthGuard } from './modules/auth/guards/auth.guard';
import { ListWithPagintonComponent } from './modules/review/pages/list-with-paginton/list-with-paginton.component';
import { BusinessProfileComponent } from './modules/review/pages/business-profile/business-profile.component';
import {CreateUserPageComponent} from './modules/auth/pages/create-user-page/create-user-page.component';
import {ConfirmationPageComponent} from './modules/auth/pages/confirmation-page/confirmation-page.component';


const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'profile',
    component: UserProfilePageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'list',
    component: ListWithPagintonComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'business-profile',
    component: BusinessProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'create-user',
    component: CreateUserPageComponent
  },
  {
    path: 'confirm-user',
    component : ConfirmationPageComponent,
  },
  {
    path: '**',
    component: LoginPageComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



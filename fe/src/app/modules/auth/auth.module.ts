import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptor} from './interceptors/auth-interceptor';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {UserProfilePageComponent} from './pages/user-profile-page/user-profile-page.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {CreateUserPageComponent} from './pages/create-user-page/create-user-page.component';
import {NgbDatepickerModule} from "@ng-bootstrap/ng-bootstrap";
import {RouterModule} from "@angular/router";
import { ConfirmationPageComponent } from './pages/confirmation-page/confirmation-page.component';


@NgModule({
    declarations: [LoginPageComponent, UserProfilePageComponent, CreateUserPageComponent, ConfirmationPageComponent],
    imports: [
        CommonModule, HttpClientModule, ReactiveFormsModule, FontAwesomeModule, NgbDatepickerModule, RouterModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        }
    ],
})
export class AuthModule {
}

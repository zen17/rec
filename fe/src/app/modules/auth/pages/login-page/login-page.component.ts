import {Component, OnInit} from '@angular/core';
import {Authetication} from '../../models/authentication';
import {FormGroup, FormBuilder} from '@angular/forms';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {faKey} from '@fortawesome/free-solid-svg-icons';
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";


@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

    public faIcons = {
        faKey: faKey,
        faUser: faUser
    }

    responseError;
    public loginForm: FormGroup;

    constructor(private fb: FormBuilder, private readonly router: Router, private readonly authenticationService: AuthenticationService) {
    }

    ngOnInit() {
        this.loginForm = this.fb.group({
            email: [''],
            password: ['']
        });
    }

    getLoginFormData() {
        const loginData = this.loginForm.getRawValue();
        this.authenticationService.getAuthToken(loginData.email, loginData.password)
            .subscribe(
                token => {
                    localStorage.setItem('access_token', token.access_token);
                    this.router.navigate(['list']);
                },
                error => this.responseError = error.error);
    }

}

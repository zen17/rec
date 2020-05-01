import { Component, OnInit } from '@angular/core';
import { Authetication } from '../../models/authentication';
import { FormGroup, FormBuilder } from '@angular/forms';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';

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
  public loginForm: FormGroup;
  constructor(private fb: FormBuilder, private readonly authetication: Authetication) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: [''],
      password: ['']
    });
  }

  getLoginFormData() {
    const loginData = this.loginForm.getRawValue();
    this.authetication.login(loginData.email, loginData.password);
  }

}

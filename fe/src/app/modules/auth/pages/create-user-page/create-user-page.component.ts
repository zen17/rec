import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from "../../../core/models/user";

@Component({
    selector: 'app-create-user-page',
    templateUrl: './create-user-page.component.html',
    styleUrls: ['./create-user-page.component.scss']
})
export class CreateUserPageComponent implements OnInit {

    createUserFormGroup: FormGroup;

    constructor() {
    }

    ngOnInit(): void {
        this.createUserFormGroup = new FormGroup({
            firstName: new FormControl('', [Validators.required]),
            lastName: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required]),
            repeatPassword: new FormControl('', [Validators.required]),
            city: new FormControl('', [Validators.required]),
            country: new FormControl('', [Validators.required]),
            zip: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]\d*$/)
            ]),
            gender: new FormControl('male', [Validators.required]),
        });
    }

    passwordsMatch() {
        return this.createUserFormGroup.get('password').value === this.createUserFormGroup.get('repeatPassword').value;
    }

    get firstName() {
        return this.createUserFormGroup.get('firstName');
    }

    get lastName() {
        return this.createUserFormGroup.get('lastName');
    }

    get email() {
        return this.createUserFormGroup.get('email');
    }

    get password() {
        return this.createUserFormGroup.get('password');
    }

    get repeatPassword() {
        return this.createUserFormGroup.get('repeatPassword');
    }

    get city() {
        return this.createUserFormGroup.get('city');
    }

    get country() {
        return this.createUserFormGroup.get('country');
    }

    get zip() {
        return this.createUserFormGroup.get('zip');
    }

    createUser() {
        if (this.createUserFormGroup.valid) {
            const user = new User();
            user.populateObjectFormReactiveFormGroup(this.createUserFormGroup);
            console.log('FORM', this.createUserFormGroup);
            console.log('FORM', this.createUserFormGroup.controls);
            console.log('FORM', this.createUserFormGroup.value);
            console.log('User: ', user);
        }
    }

}

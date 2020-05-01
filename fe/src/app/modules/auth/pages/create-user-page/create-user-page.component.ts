import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../../core/models/user';
import {NgbCalendar, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {UserService} from "../../../core/services/user.service";

@Component({
    selector: 'app-create-user-page',
    templateUrl: './create-user-page.component.html',
    styleUrls: ['./create-user-page.component.scss']
})
export class CreateUserPageComponent implements OnInit {

    createUserFormGroup: FormGroup;
    errorMsg = '';

    constructor(private readonly userService: UserService) {
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

    ngOnInit(): void {
        const date = new Date();
        this.createUserFormGroup = new FormGroup({
            firstName: new FormControl('', [Validators.required]),
            lastName: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required, Validators.minLength(7)]),
            repeatPassword: new FormControl('', [Validators.required, Validators.minLength(7)]),
            city: new FormControl('', [Validators.required]),
            country: new FormControl('', [Validators.required]),
            zip: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]\d*$/)
            ]),
            gender: new FormControl('male', [Validators.required]),
            birthDate: new FormControl({
                day: date.getDate(),
                month: date.getMonth() + 1,
                year: date.getFullYear()
            }, Validators.required)
        });
    }

    passwordsMatch() {
        return this.createUserFormGroup.get('password').value === this.createUserFormGroup.get('repeatPassword').value;
    }

    createUser() {
        const date = new Date('1996-10-17');
        console.log('DATEEEE: ', date.toISOString())

        if (this.createUserFormGroup.valid) {
            const user = new User();
            user.populateObjectFormReactiveFormGroup(this.createUserFormGroup);
            console.log('FORM', this.createUserFormGroup.controls);
            console.log('USER', user);
            this.userService.createUser(user).subscribe(success => {
                console.log(success);
                this.errorMsg = 'User created';
            }, error => {
                console.log(error);
                this.errorMsg = error.error.message;
            });

        } else {
            Object.keys(this.createUserFormGroup.controls).forEach(key => {
                if (this.createUserFormGroup.controls[key].invalid) {
                    this.createUserFormGroup.controls[key].markAsTouched();
                }
            });
        }
    }

}

import { Component, OnInit } from '@angular/core';
import { Authetication } from '../../models/authentication';

@Component({
  selector: 'app-user-profile-page',
  templateUrl: './user-profile-page.component.html',
  styleUrls: ['./user-profile-page.component.scss']
})
export class UserProfilePageComponent implements OnInit {

  constructor(private readonly authetication: Authetication) { }

  ngOnInit(): void {
  }

  logout(){
    this.authetication.logout();
  }

}

import { Component, OnInit } from '@angular/core';
import { Authetication } from 'src/app/modules/auth/models/authentication';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navbarOpen = false;
  isLoggedin = false;

  constructor(private readonly authetication: Authetication) { }

  ngOnInit() {
    this.isLoggedin = this.authetication.isLoggedin();
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  logout() {
    this.authetication.logout();
  }


}

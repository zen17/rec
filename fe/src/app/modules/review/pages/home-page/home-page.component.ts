import { Component, OnInit } from '@angular/core';
import { Business } from 'src/app/modules/core/models/business';
import { User } from 'src/app/modules/core/models/user';
import { Router } from '@angular/router';
import { BusinessService } from 'src/app/modules/core/services/business.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  business: Business;
  constructor(private router: Router, private businessService: BusinessService ) {
   // this.business = new Business(new User());
  }

  ngOnInit(): void {
    //TODO: takeUntil unsubscribe !!!! 
    this.businessService.loadById(1).subscribe(business => {
      this.business = business
      console.log(this.business);
      
    });
  }

  search(){
    this.router.navigate(['list']);
  }

}

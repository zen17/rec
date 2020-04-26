import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business-profile',
  templateUrl: './business-profile.component.html',
  styleUrls: ['./business-profile.component.scss']
})
export class BusinessProfileComponent implements OnInit {

   // Variables
   images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/450`);
   currentRate = 3;
   public page = 1;

  constructor() { }

  ngOnInit(): void {
  }

}

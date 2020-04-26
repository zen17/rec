import { Component, OnInit, Input } from '@angular/core';
import { Business } from 'src/app/modules/core/models/business';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  public faIcons = {
    faStar: faStar,
    faHeart: faHeart
  }


  @Input() business: Business;
  
  constructor() { }

  ngOnInit(): void {
  }

}

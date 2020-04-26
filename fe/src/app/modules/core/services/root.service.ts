import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class RootService {

  public readonly rootApiUrl: string;

  constructor() {
    // this.rootApiUrl = environment.rootApiUrl;
    this.rootApiUrl = 'https://rec-be-dot-recenzija-270220.appspot.com/api';
    console.log('ANGULAR ENV,', environment);
  }
}

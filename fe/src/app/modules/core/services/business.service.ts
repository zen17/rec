import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Business } from '../models/business';
import { RootService } from './root.service';
import { BusinessList } from '../models/business-list';
import { Pagination } from '../models/pagination';
import { User } from '../models/user';
import { map } from 'rxjs/operators';
import { CommentList } from '../models/comment-list';

@Injectable({
  providedIn: 'root'
})
export class BusinessService extends RootService {

  constructor(private httpClient: HttpClient) {
    super();
  }

  public loadById(id: number): Observable<Business> {
    return this.httpClient.get<Business>(this.rootApiUrl + '/fullbusiness/' + id)
      .pipe(
        map(business => new Business(new User(), new CommentList()).deserialze(business))
      );
  }

  // loadBusinessList(pagination: Pagination): Observable<any>{ 
  //   return this.httpClient.get<BusinessList>(this.rootApiUrl +  '/businesslistpartialdata/' + pagination.pageNumber + '/' + pagination.elementsPerPage);
  // }


  loadBusinessList(pagination: Pagination): Observable<BusinessList> {
    return this.httpClient.get<BusinessList>(this.rootApiUrl + '/businesslistpartialdata/' + pagination.pageNumber + '/' + pagination.elementsPerPage)
      .pipe(
        map(businessList => new BusinessList().deserialze(businessList))
      );
  }

  // loadBusinessList(pagination: Pagination): Observable<BusinessList> {
  //   const businessList = new BusinessList();
  //   return this.httpClient.get<Business[]>(this.rootApiUrl + '/businesslistpartialdata/' + pagination.pageNumber + '/' + pagination.elementsPerPage)
  //     .pipe(
  //       map(<Business>businessList.elements => new Business(new User(), new CommentList()).deserialze(business)),
  //       reduce(data => businessList));
  // }
}

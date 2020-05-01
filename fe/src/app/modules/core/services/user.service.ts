import {Injectable} from '@angular/core';
import {User} from '../models/user';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {RootService} from './root.service';
import {IUser} from '../models/user.interface';

@Injectable({
    providedIn: 'root'
})
export class UserService extends RootService {

    constructor(private httpClient: HttpClient) {
        super();
    }

    public createUser(user: User): Observable<User> {
        return this.httpClient.post<User>(this.rootApiUrl + '/createuser/', JSON.stringify(user))
            .pipe(
                map(res => new User().deserialize(res))
            );
    }
}

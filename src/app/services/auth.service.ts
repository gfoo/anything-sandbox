import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

import { environment } from '../../environments/environment';
import { UserModel } from '../models/user.model';

const USER_KEY = 'knora-user';

@Injectable()
export class AuthService {

  public userEvents = new BehaviorSubject<UserModel>(undefined);

  constructor(private http: HttpClient) {
    this.retrieveUser();
  }

  authenticate(credentials): Observable<any> {
    return this.http
      .post(`${environment.baseUrl}/v2/authentication`, credentials)
      .do((token: any) => this.storeLoggedInUser(
        {
          email: credentials.email,
          token: token
        }));
  }


  storeLoggedInUser(user) {
    window.localStorage.setItem(USER_KEY, JSON.stringify(user));
    this.userEvents.next(user);
  }

  retrieveUser() {
    const value = window.localStorage.getItem(USER_KEY);
    if (value) {
      const user = JSON.parse(value);
      this.userEvents.next(user);
    }
  }

  logout() {
    this.userEvents.next(null);
    window.localStorage.removeItem(USER_KEY);
  }

}

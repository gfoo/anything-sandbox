import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

import { BackendService } from './backend.service';
import { UserModel } from '../models/user.model';

const USER_KEY = 'user-data';

@Injectable()
export class AuthService {
  public userEvents = new BehaviorSubject<UserModel>(undefined);

  constructor(private backendService: BackendService) {
    this.retrieveUser();
  }

  authenticate(credentials): Observable<any> {
    return this.backendService
      .login(credentials.email, credentials.password)
      .do((token: any) =>
        this.storeLoggedInUser({
          email: credentials.email,
          token: token
        })
      );
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

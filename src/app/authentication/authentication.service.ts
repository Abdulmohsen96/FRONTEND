import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from '../user/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private LoginURL = "http://localhost:8080/Users/Login";

  constructor(private http: HttpClient) {
  }

  login(email: string, password: string) {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Basic ' + btoa(`${email}:${password}`));

    return this.http.get<any>(this.LoginURL, { headers: headers })
      .pipe(map(user => {
        // login successful if there's a user in the response
        if (user) {
          // store user details and basic auth credentials in local storage
          // to keep user logged in between page refreshes
          user.authdata = btoa(`${email}:${password}`);
          localStorage.setItem('currentUser', JSON.stringify(user));
          user = JSON.parse(localStorage.getItem('currentUser'));
        }
        return user;
      }));
  }

  logout() {
    localStorage.removeItem('currentUser');
  }

  isAuthenticated() {
    if (JSON.parse(localStorage.getItem('currentUser')))
      return true;
  }

  getUserID(): number {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser)
      return currentUser.userID;
  }

  getRole(): string {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser)
      return currentUser.role;
  }

  getOrganizationID(): number {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser)
      return currentUser.organizationID;
  }

}

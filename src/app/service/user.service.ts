import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { User } from '../model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private AddUserURL = "http://localhost:8080/Users/AddUser"
  private GetAllUsersURL = "http://localhost:8080/Users/GetAllUsers";
  private GetUserByIdURL = "http://localhost:8080/Users/GetAllUsers/";
  private DeleteUserURL = "http://localhost:8080/Users/DeleteUser/";

  constructor(private httpClient: HttpClient) { }

  addUser(user): Observable<User> {
    return this.httpClient.post<User>(this.AddUserURL, user);
  };

  getAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.GetAllUsersURL);
  };

  getUserByID(userID: number): Observable<User> {
    return this.httpClient.get<User>(this.GetUserByIdURL + userID)
  };

  deleteUser(userID: number): Observable<User> {
    return this.httpClient.delete<User>(this.DeleteUserURL + userID);
  };

}

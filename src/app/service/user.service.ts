import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private AddUserURL = "http://localhost:8080/Users/AddUser"
  private GetAllUsersURL = "http://localhost:8080/Users/GetAllUsers";
  private DeleteUser = "http://localhost:8080/Users/DeleteUser/";

  constructor(private httpClient: HttpClient) { }

  addUser(user: User) {
    return this.httpClient.post(this.AddUserURL, user);
  };

  getAllUsers() {
    return this.httpClient.get<User[]>(this.GetAllUsersURL);
  };

  deleteUser(userID: number) {
    return this.httpClient.delete(this.DeleteUser + userID);
  }

}

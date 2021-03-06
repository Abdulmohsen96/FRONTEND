import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { User } from '../user/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getAllUsers().subscribe(
      result => {
        this.users = result;
      }
    )
  }

  deleteUser(user: User) {
    this.userService.deleteUser(user.userID).subscribe(
      result => {
        let index = this.users.indexOf(user);
        this.users.splice(index, 1);
      }
    )
  }

}

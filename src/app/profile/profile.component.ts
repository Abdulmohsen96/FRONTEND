import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { User } from '../user/user';
import { UserService } from '../user/user.service';
import { AuthenticationService } from '../authentication/authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;
  show = false;

  constructor(private route: ActivatedRoute, private userService: UserService, private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.getUserProfile()
  }

  getUserProfile() {
    this.userService.getUserByID(this.authService.getUserID()).subscribe(
      result => {
        this.user = result;
      }
    )
  }

  toggle() {
    this.show = !this.show;
  }
}

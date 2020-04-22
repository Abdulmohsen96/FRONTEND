import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../user/user';
import { UserService } from '../user/user.service';
import { Authority } from '../authority/authority';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user: User = {
    userID: 0,
    fullName: null,
    dob: null,
    phoneNumber: null,
    email: null,
    password: null,
    nationalID: null,
    enabled: 1,
    authorityName: new Authority(1, "ROLE_INDIVIDUAL"),
  }

  form = new FormGroup({
    fullName: new FormControl('', [Validators.required, Validators.minLength(5)]),
    dob: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    nationalID: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)])
  })

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  addUser(): void {
    this.userService.addUser(this.user).subscribe(
      res => {
        location.reload();
      }
    )
  }

}

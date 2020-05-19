import { Component, OnInit } from '@angular/core';
import { User } from '../user/user';
import { Authority } from '../authority/authority';
import { OrganizationService } from '../organization/organization.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Organization } from '../organization/organization';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-organization-registration',
  templateUrl: './organization-registration.component.html',
  styleUrls: ['./organization-registration.component.css']
})
export class OrganizationRegistrationComponent implements OnInit {

  user: User = {
    userID: 0,
    fullName: null,
    dob: new Date(),
    phoneNumber: '0000000000',
    email: null,
    password: null,
    nationalID: '0000000000',
    enabled: 1,
    authorityName: new Authority(2, "ROLE_ORGANIZATION"),
    userOrganization: null
  }

  organizations: Organization[];

  organizationRegistrationForm = new FormGroup({
    organizationSelect: new FormControl('', Validators.required),
    accountName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  constructor(private organizationService: OrganizationService, private userService: UserService) { }

  ngOnInit(): void {
    this.getAllOrganizations();
  }

  get form() {
    return this.organizationRegistrationForm.controls;
  }

  getAllOrganizations() {
    this.organizationService.getAllOrganizations().subscribe(
      res => {
        this.organizations = res;
      },
      err => {
        console.log(err);
      }
    )
  }

  getOrganization(): void {
    this.organizationService.getOrganization(this.form.organizationSelect.value).subscribe(
      res => {
        this.user.userOrganization = res;
        this.user.phoneNumber = res.organizationContactNumber;
        this.addOrganizationAccount();
      },
      err => {
        console.log(err);
      }
    )
  }

  addOrganizationAccount(): void {
    this.userService.addUser(this.user).subscribe(
      res => {
        location.reload();
      },
      err => {
        console.log(err);
      }
    )
  }

}

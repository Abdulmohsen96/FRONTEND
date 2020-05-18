import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Organization } from '../organization/organization';
import { OrganizationService } from '../organization/organization.service';

@Component({
  selector: 'app-add-organization',
  templateUrl: './add-organization.component.html',
  styleUrls: ['./add-organization.component.css']
})
export class AddOrganizationComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private organizationService: OrganizationService) { }

  organization: Organization = {
    organizationName: null,
    organizationAddress: null,
    organizationContactNumber: null
  };

  organizationForm = this.formBuilder.group({
    organizationName: ['', Validators.required],
    organizationAddress: ['', Validators.required],
    organizationContactNumber: ['', Validators.required]
  });

  ngOnInit(): void {
  }

  get form() {
    return this.organizationForm.controls;
  }

  addOrganization() {
    this.organizationService.addOrganization(this.organization).subscribe(
      res => {
        location.reload();
      },
      err => {
        console.log(err);
      }
    )
  }

}

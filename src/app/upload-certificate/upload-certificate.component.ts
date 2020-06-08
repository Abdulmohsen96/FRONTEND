import { Component, OnInit, ElementRef } from '@angular/core';
import { CertificateService } from '../certificate/certificate.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Certificate } from '../certificate/certificate';
import { User } from '../user/user';
import { AuthenticationService } from '../authentication/authentication.service';
import { Organization } from '../organization/organization';
import { OrganizationService } from '../organization/organization.service';

@Component({
  selector: 'app-upload-certificate',
  templateUrl: './upload-certificate.component.html',
  styleUrls: ['./upload-certificate.component.css']
})
export class UploadCertificateComponent implements OnInit {

  constructor(private certificateService: CertificateService, private element: ElementRef, private formBuilder: FormBuilder, private authService: AuthenticationService, private organizationService: OrganizationService) { }

  cert: Certificate = {
    certificateID: 0,
    certificateName: null,
    certificateType: null,
    certificateDescription: null,
    certificateDate: null,
    certificateOrganization: null
  }

  organizations: Organization[];
  organizationID: number;

  uploadForm = this.formBuilder.group({
    organizationSelect: ['', Validators.required],
    Description: ['', Validators.required],
    Date: ['', Validators.required]
  });

  ngOnInit(): void {
    this.getAllOrganizations();
  }

  get form() {
    return this.uploadForm.controls;
  }

  uploadFile() {
    let files = this.element.nativeElement.querySelector('#uploadFile').files;
    let formData = new FormData();
    let file = files[0];
    formData.append('file', file, file.name);
    this.certificateService.uploadFile(formData).subscribe(
      result => {
        this.cert.certificateID = result.certificateID;
        this.organizationService.getOrganization(this.form.organizationSelect.value).subscribe(
          res => {
            this.organizationID = res.organizationID;
            this.certificateService.updateFile(this.cert, this.organizationID).subscribe(
              result => {
                location.reload()
              }
            )
          }
        )
      }, error => {
        console.log(error)
      }
    )
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
}

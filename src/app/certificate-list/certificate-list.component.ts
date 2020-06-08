import { Component, OnInit } from '@angular/core';
import { Certificate } from '../certificate/certificate';
import { CertificateService } from '../certificate/certificate.service';
import { Router } from '@angular/router';
import { Organization } from '../organization/organization';

@Component({
  selector: 'app-certificate-list',
  templateUrl: './certificate-list.component.html',
  styleUrls: ['./certificate-list.component.css']
})
export class CertificateListComponent implements OnInit {

  constructor(private certificateService: CertificateService, private router: Router) { }
  certificates: Certificate[];
  organization: Organization;

  ngOnInit(): void {
    this.certificateList();
  }

  certificateList() {
    this.certificateService.getAllCertificatesByUserID().subscribe(
      result => {
        this.certificates = result;
      },
      error => {
        console.log(error);
      }
    )
  }

  deleteCertificate(certificate: Certificate) {
    if (confirm("Are you sure you want to delete this certificate?")) {
      this.certificateService.deleteCertificate(certificate.certificateID).subscribe(
        result => {
          let index = this.certificates.indexOf(certificate);
          this.certificates.splice(index, 1);
        },
        error => {
          alert("An error has eccurred");
        }
      )
    }
  }

  editCertificate(certificateID: number) {
    this.router.navigate(['/edit-certificate', certificateID])
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';
import { CertificateService } from '../certificate/certificate.service';
import { Certificate } from '../certificate/certificate';

@Component({
  selector: 'app-certificate-list-org',
  templateUrl: './certificate-list-org.component.html',
  styleUrls: ['./certificate-list-org.component.css']
})
export class CertificateListOrgComponent implements OnInit {

  constructor(private certificateService: CertificateService, private authService: AuthenticationService) { }
  certificates: Certificate[];
  organizationID: number;

  ngOnInit(): void {
    this.organizationID = this.authService.getOrganizationID();
    this.certificateList();
  }

  certificateList() {
    this.certificateService.getAllCertificatesByOrganizationID().subscribe(
      result => {
        this.certificates = result;
      },
      error => {
        console.log(error);
      }
    )
  }

  verifyCertificate(certificate: Certificate, certificateSatus: string) {
    if (confirm("Are you sure you want to verify this certificate?")) {
      this.certificateService.updateStatus(certificate, certificateSatus).subscribe(
        result => {
          location.reload();
        },
        error => {
          alert("An error has eccurred");
        }
      )
    }
  }

  declineCertificate(certificate: Certificate, certificateSatus: string) {
    if (confirm("Are you sure you want to decline this certificate?")) {
      this.certificateService.updateStatus(certificate, certificateSatus).subscribe(
        result => {
          location.reload();
        },
        error => {
          alert("An error has eccurred");
        }
      )
    }
  }

}

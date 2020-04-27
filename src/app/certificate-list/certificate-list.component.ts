import { Component, OnInit } from '@angular/core';
import { Certificate } from '../certificate/certificate';
import { CertificateService } from '../certificate/certificate.service';

@Component({
  selector: 'app-certificate-list',
  templateUrl: './certificate-list.component.html',
  styleUrls: ['./certificate-list.component.css']
})
export class CertificateListComponent implements OnInit {

  constructor(private certificateService: CertificateService) { }
  certificates: Certificate[];

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
    this.certificateService.deleteCertificate(certificate.certificateID).subscribe(
      result => {
        let index = this.certificates.indexOf(certificate);
        this.certificates.splice(index, 1);
      }
    )
  }

}

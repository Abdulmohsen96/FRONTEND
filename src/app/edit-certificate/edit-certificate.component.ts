import { Component, OnInit } from '@angular/core';
import { CertificateService } from '../certificate/certificate.service';
import { ActivatedRoute } from '@angular/router';
import { Certificate } from '../certificate/certificate';


@Component({
  selector: 'app-edit-certificate',
  templateUrl: './edit-certificate.component.html',
  styleUrls: ['./edit-certificate.component.css']
})
export class EditCertificateComponent implements OnInit {

  certificate: Certificate
  constructor(private certificateService: CertificateService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('certificateID'));
    this.getCertificate(id);
  }

  getCertificate(certificateID: number) {
    this.certificateService.getCertificate(certificateID).subscribe(
      res => {
        this.certificate = res;
      },
      err => {
        console.log(err);
      }
    )
  }

}

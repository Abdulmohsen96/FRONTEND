import { Component, OnInit } from '@angular/core';
import { CertificateService } from '../certificate/certificate.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Certificate } from '../certificate/certificate';
import { FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-edit-certificate',
  templateUrl: './edit-certificate.component.html',
  styleUrls: ['./edit-certificate.component.css']
})
export class EditCertificateComponent implements OnInit {

  constructor(private certificateService: CertificateService, private route: ActivatedRoute, private formBuilder: FormBuilder, private router: Router) { }

  certificate: Certificate;

  editCertForm = this.formBuilder.group({
    Name: ['', Validators.required],
    Description: ['', Validators.required],
    Date: ['', Validators.required]
  });

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
        this.router.navigate(['/not-found']);
      }
    )
  }

  updateCertificate() {
    this.certificateService.updateCertificate(this.certificate, this.certificate.certificateID).subscribe(
      res => {
        this.router.navigate(['/profile']);
      },
      err => {
        console.log(err);
      }
    )
  }

}

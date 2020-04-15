import { Component, OnInit, ElementRef } from '@angular/core';
import { CertificateService } from '../certificate/certificate.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Certificate } from '../certificate/certificate';

@Component({
  selector: 'app-upload-certificate',
  templateUrl: './upload-certificate.component.html',
  styleUrls: ['./upload-certificate.component.css']
})
export class UploadCertificateComponent implements OnInit {

  constructor(private certificateService: CertificateService, private element: ElementRef, private formBuilder: FormBuilder) { }

  cert: Certificate = {
    certificateID: 0,
    certificateName: null,
    certificateType: null,
    certificateDescription: null,
    certificateDate: null
  }

  uploadForm = this.formBuilder.group({
    Description: ['', Validators.required],
    Date: ['', Validators.required]
  });

  ngOnInit(): void {
  }

  uploadFile() {
    let files = this.element.nativeElement.querySelector('#uploadFile').files;
    let formData = new FormData();
    let file = files[0];
    formData.append('file', file, file.name);
    this.certificateService.uploadFile(formData).subscribe(
      result => {
        location.reload();
      }, error => {
        console.log(error)
      }
    )
  }
}

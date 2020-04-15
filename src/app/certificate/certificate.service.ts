import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Certificate } from './certificate';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CertificateService {

    private AddCertificatesURL = "http://localhost:8080/Certificates/AddCertificate"
    private GetAllCertificatesURL = "http://localhost:8080/Certificates/GetAllCertificates";
    private GetCertificateByIdURL = "http://localhost:8080/Certificates/GetAllUsers/";
    private DeleteCertificatesURL = "http://localhost:8080/Certificates/DeleteUser/";
    private UploadCertificatesURL = "http://localhost:8080/Certificates/UploadCertificate";


    constructor(private httpClient: HttpClient) { }

    getAllCertificates(): Observable<Certificate[]> {
        return this.httpClient.get<Certificate[]>(this.GetAllCertificatesURL);
    }

    uploadFile(formdata: any) {
        return this.httpClient.post(this.UploadCertificatesURL, formdata)
    }

}

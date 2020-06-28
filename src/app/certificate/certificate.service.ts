import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Certificate } from './certificate';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable({
    providedIn: 'root'
})
export class CertificateService {

    private AddCertificatesURL = "http://localhost:8080/Certificates/AddCertificate"
    private GetAllCertificatesURL = "http://localhost:8080/Certificates/GetAllCertificates";
    private GetCertificateByIdURL = "http://localhost:8080/Certificates/GetCertificate/";
    private UpdateCertificateURL = "http://localhost:8080/Certificates/UpdateCertificate/";
    private DeleteCertificatesURL = "http://localhost:8080/Certificates/DeleteCertificate/";
    private UploadCertificatesURL = "http://localhost:8080/Certificates/UploadCertificate";
    private GetAllCertificatesByUserIdURL = "http://localhost:8080/Certificates/GetAllCertificates/" + this.authService.getUserID();
    private GetAllCertificatesByOrganizationIdURL = "http://localhost:8080/Certificates/GetAllCertificatesForOrg/" + this.authService.getOrganizationID();
    private UpdateFileURL = "http://localhost:8080/Certificates/UpdateFile/" + this.authService.getUserID() + "/";
    private UpdateStatusURL = "http://localhost:8080/Certificates/UpdateStatus/" + this.authService.getOrganizationID() + "/";



    constructor(private httpClient: HttpClient, private authService: AuthenticationService) { }

    addCertificate(certificate: Certificate) {
        return this.httpClient.post(this.AddCertificatesURL, certificate);
    }

    getAllCertificates(): Observable<Certificate[]> {
        return this.httpClient.get<Certificate[]>(this.GetAllCertificatesURL);
    }

    getCertificate(certificateID: number): Observable<Certificate> {
        return this.httpClient.get<Certificate>(this.GetCertificateByIdURL + certificateID + "/" + this.authService.getUserID());
    }

    updateCertificate(certificate: Certificate, certificateID: number): Observable<Certificate> {
        return this.httpClient.put<Certificate>(this.UpdateCertificateURL + certificateID, certificate);
    }

    deleteCertificate(certificateID: number) {
        return this.httpClient.delete(this.DeleteCertificatesURL + certificateID);
    }

    uploadFile(formdata: any): Observable<Certificate> {
        return this.httpClient.post<Certificate>(this.UploadCertificatesURL, formdata);
    }

    getAllCertificatesByUserID(): Observable<Certificate[]> {
        return this.httpClient.get<Certificate[]>(this.GetAllCertificatesByUserIdURL);
    }

    getAllCertificatesByOrganizationID(): Observable<Certificate[]> {
        return this.httpClient.get<Certificate[]>(this.GetAllCertificatesByOrganizationIdURL);
    }

    updateFile(certificate: Certificate, organizationID: number) {
        return this.httpClient.put(this.UpdateFileURL + organizationID, certificate);
    }

    updateStatus(certificate: Certificate, certificateSatus: string) {
        return this.httpClient.put(this.UpdateStatusURL + certificateSatus, certificate);
    }

}

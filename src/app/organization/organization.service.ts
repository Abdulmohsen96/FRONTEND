import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Organization } from './organization';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  private AddOrganizationURL = "http://localhost:8080/Users/AddOrganization";
  private GetOrganizationURL = "http://localhost:8080/Users/GetOrganization/";
  private GetAllOrganizationsURL = "http://localhost:8080/Users/GetAllOrganizations";

  constructor(private httpClient: HttpClient) { }

  addOrganization(organization: Organization): Observable<Organization> {
    return this.httpClient.post<Organization>(this.AddOrganizationURL, organization);
  }

  getOrganization(organizationName: string): Observable<Organization> {
    return this.httpClient.get<Organization>(this.GetOrganizationURL + organizationName);
  }

  getAllOrganizations(): Observable<Organization[]> {
    return this.httpClient.get<Organization[]>(this.GetAllOrganizationsURL);
  }
}

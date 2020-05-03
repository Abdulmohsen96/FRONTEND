import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HeaderComponent } from './header/header.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './user/user.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component'
import { BasicAuthInterceptor } from './authentication/basic-auth.interceptor';
import { LogoutComponent } from './logout/logout.component';
import { ErrorInterceptor } from './authentication/error.interceptor';
import { UploadCertificateComponent } from './upload-certificate/upload-certificate.component';
import { CertificateService } from './certificate/certificate.service';
import { CertificateListComponent } from './certificate-list/certificate-list.component';
import { EditCertificateComponent } from './edit-certificate/edit-certificate.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HeaderComponent,
    UserListComponent,
    ProfileComponent,
    LogoutComponent,
    UploadCertificateComponent,
    CertificateListComponent,
    EditCertificateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [UserService, CertificateService,
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

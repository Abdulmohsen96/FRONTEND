import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HeaderComponent } from './header/header.component';
import { UserListComponent } from './user-list/user-list.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './authentication/auth.guard';
import { EditCertificateComponent } from './edit-certificate/edit-certificate.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddOrganizationComponent } from './add-organization/add-organization.component';
import { OrganizationRegistrationComponent } from './organization-registration/organization-registration.component';


const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'home', component: AppComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'users', component: UserListComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'edit-certificate/:certificateID', component: EditCertificateComponent, canActivate: [AuthGuard] },
  { path: 'logout', component: LoginComponent },
  { path: 'addOrganization', component: AddOrganizationComponent },
  { path: 'organizationRegistration', component: OrganizationRegistrationComponent },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

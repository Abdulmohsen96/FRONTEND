import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HeaderComponent } from './header/header.component';
import { UserListComponent } from './user-list/user-list.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './authentication/auth.guard';


const routes: Routes = [
  { path: '', component: AppComponent, canActivate: [AuthGuard] },
  { path: 'home', component: AppComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'users', component: UserListComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'logout', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

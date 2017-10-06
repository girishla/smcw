import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { UserLoginComponent } from './auth/user-login/user-login.component';
import { LandingPageComponent } from './landing/landing-page/landing-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'login', component: UserLoginComponent, },
  // { path: 'uploads', loadChildren: './uploads/shared/upload.module#UploadModule' }
  // { path: 'uploads', component: UploadsListComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }

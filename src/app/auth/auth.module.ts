import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginComponent } from './user-login/user-login.component';
import { AuthService } from './auth.service';
import { UserSignupFormComponent } from './user-signup-form/user-signup-form.component';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';

@NgModule({
  imports: [
    CommonModule,AngularFireAuthModule,FormsModule,ReactiveFormsModule
  ],
  providers: [AuthService,AngularFireDatabase],
  declarations: [UserLoginComponent, UserSignupFormComponent],
  exports:[UserLoginComponent,UserSignupFormComponent]
})
export class AuthModule { }



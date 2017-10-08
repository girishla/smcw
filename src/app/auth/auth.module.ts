import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginComponent } from './user-login/user-login.component';
import { AuthService } from './auth.service';
import { UserSignupFormComponent } from './user-signup-form/user-signup-form.component';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { UserLoginDialogComponent } from './user-login-dialog/user-login-dialog.component';
import { MatDialog, MatDialogModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,AngularFireAuthModule,FormsModule,ReactiveFormsModule,MatDialogModule
  ],
  providers: [AuthService,AngularFireDatabase],
  declarations: [UserLoginComponent, UserSignupFormComponent, UserLoginDialogComponent],
  exports:[UserLoginComponent,UserSignupFormComponent,UserLoginDialogComponent],
  entryComponents: [UserLoginDialogComponent]
})
export class AuthModule { }



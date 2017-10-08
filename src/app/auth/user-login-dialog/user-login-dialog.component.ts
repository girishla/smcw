import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'smc-user-login-dialog',
  templateUrl: './user-login-dialog.component.html',
  styleUrls: ['./user-login-dialog.component.scss']
})
export class UserLoginDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<UserLoginDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}

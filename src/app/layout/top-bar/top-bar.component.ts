import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { UserLoginDialogComponent } from '../../auth/user-login-dialog/user-login-dialog.component';


@Component({
  selector: 'smc-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})


export class TopBarComponent implements OnInit, AfterViewInit {

  container: HTMLDivElement;
  toggleElement: Element;
  menuElement: Element;

  @ViewChild('navcontainer') containerViewChild: ElementRef;


  ngAfterViewInit(): void {
    this.container = <HTMLDivElement>this.containerViewChild.nativeElement;
    this.toggleElement = this.container.querySelector('.nav-toggle');
    this.menuElement = document.querySelector('.nav-menu');
    this.toggleElement.addEventListener('click', this.OnToggleMenu.bind(this));

  }

  OnToggleMenu() {

    this.toggleElement.classList.toggle('is-active');
    this.menuElement.classList.toggle('is-active');

  }


  login() {

    this.toggleElement.classList.toggle('is-active');
    this.menuElement.classList.toggle('is-active');
    this.router.navigate(['login']);
  }


  loginDialog(): void {

    this.toggleElement.classList.toggle('is-active');
    this.menuElement.classList.toggle('is-active');

    let dialogRef = this.dialog.open(UserLoginDialogComponent, {
      width: '520px',
      panelClass: 'login-dialog',
      data: {  }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  constructor(private router: Router,public dialog: MatDialog) {}

  ngOnInit() {
  }


}

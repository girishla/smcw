import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'smc-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})


export class TopBarComponent implements OnInit,AfterViewInit {
 
  container: HTMLDivElement;
  toggleElement: Element;
  menuElement: Element;

  @ViewChild('navcontainer') containerViewChild: ElementRef;
 

  ngAfterViewInit(): void {
    this.container = <HTMLDivElement> this.containerViewChild.nativeElement;
    this.toggleElement=this.container.querySelector('.nav-toggle');
    this.menuElement = document.querySelector('.nav-menu');
    this.toggleElement.addEventListener('click',this.OnToggleMenu.bind(this) );

  }

  OnToggleMenu() {
    
    this.toggleElement.classList.toggle('is-active');
    this.menuElement.classList.toggle('is-active');
    
}

  constructor() { }

  ngOnInit() {
  }


}

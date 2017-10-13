import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dot',
  template: `<h1 class="cursor" (click)="toggleMenu()">&bull;</h1>
  
  <div class="menu" *ngIf="showMenu">
     <ul>
        <li *ngFor="let item of menu">  
          {{item}}
        </li>
     </ul>
  </div>
  `
})
export class DotComponent {
  menu: Array<string>;
  showMenu: boolean = false;

  toggleMenu(): void {
    this.showMenu = !this.showMenu;
  }

  constructor() {
    this.menu = ["Home", "About", "Contact"]
  }
}

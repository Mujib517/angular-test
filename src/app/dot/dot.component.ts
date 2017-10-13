import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dot',
  template: `<h1 class="cursor" (click)="toggleMenu()">&bull;</h1>
  
  <div class="menu" *ngIf="showMenu">
  
     <div>
     <b>Fonts</b>
     <hr/>
        <div *ngFor="let item of menu">  
          {{item}}
        </div>
     </div>
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
    this.menu = ["Font 1", "Font 2", "Font 3"]
  }
}

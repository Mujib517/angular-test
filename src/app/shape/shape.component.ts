import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shape',
  templateUrl: './shape.html'
})
export class ShapeComponent implements OnInit {

  cls: string = "solid-border";

  constructor() { }

  ngOnInit() {
  }

  toggleShape(): void {
    this.cls = this.cls == "solid-border" ? "dotted-border" : "solid-border";
  }

}

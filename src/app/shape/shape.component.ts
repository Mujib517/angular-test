import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shape',
  templateUrl: './shape.html'
})
export class ShapeComponent implements OnInit {

  cls: string = "dotted-border";

  constructor() { }

  ngOnInit() {
  }

  toggleClass(): void {
    console.log("done");
    this.cls = this.cls == "solid-border" ? "dotted-border" : "solid-border";
  }

}

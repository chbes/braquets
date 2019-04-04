import { Component, OnInit } from '@angular/core';
import { HostListener } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public chainrings: Array<any>;
  public cogs: Array<any>;
  public gears: Array<any>;

  public smallScreen: boolean;

  constructor() {
    this.gears = [];
    this.chainrings = [];
    this.cogs = [];
    this.smallScreen = false;
  }

  ngOnInit() {
    this.onResize();
    this.update();
  }

  update() {
    this.gears = [];

    for (const ch of this.chainrings) {
      let g = { label: ch.name, data: [] }
      for (const co of this.cogs) {
        let r = Math.round((ch.value / co.value) * 100) / 100;
        g.data.push(r)
      }
      this.gears.push(g);
    }

    for (let i = 0; this.gears.length < 3; i++) {
      this.gears.push({ data: [], label: '' });
    }

  }

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.smallScreen = (window.outerHeight > window.outerWidth) && (window.outerWidth < 500);
  }

}

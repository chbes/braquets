import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent implements OnInit {

  @Input() name: string;
  @Input() prefix: string;
  @Input() defaultValue: number;
  @Input() maxItem: number;
  @Input() minItem: number;
  @Input() init: Array<number>;

  public items: Array<any>;

  @Output() itemsChange = new EventEmitter();

  constructor() {
    this.items = [];
  }

  ngOnInit() {
    for (const i in this.init) {
      this.items.push({ name: this.prefix + (parseInt(i) + 1), value: this.init[i] })
    }
    this.update();
  }

  increment() {
    if (this.items.length < this.maxItem) {
      this.items.push({ name: this.prefix + (this.items.length + 1), value: this.defaultValue });
      this.update();
    }
  }

  decrement() {
    if (this.items.length > this.minItem) {
      this.items.pop();
      this.update();
    }
  }

  update() {
    this.itemsChange.emit(this.items);
  }

}

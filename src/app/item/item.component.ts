import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {

  @Input() name: string;
  @Input() value: number;

  @Output() valueChange = new EventEmitter();

  constructor() { }

  update() {
    this.valueChange.emit(this.value);
  }

}

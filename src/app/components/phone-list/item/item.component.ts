import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input()
  phone: any;
  @Output()
  onClick = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  handleClick(){
    this.onClick.emit(this.phone);
  }

}

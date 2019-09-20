import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input()
  phones = [];
  @Output()
  onItemClick = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  handleItemClick(phone) {
    this.onItemClick.emit(phone);
  }

}

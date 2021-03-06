import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input()
  buttonLabel: string;
  @Output()
  onClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleClick() {
    this.onClick.emit();
  }

}

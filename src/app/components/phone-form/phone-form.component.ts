import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-phone-form',
  templateUrl: './phone-form.component.html',
  styleUrls: ['./phone-form.component.css']
})
export class PhoneFormComponent implements OnInit {

  @Input()
  phone: any = {};
  @Output()
  onChange = new EventEmitter<any>();

  phoneForm = this.fb.group({
    phone: [''],
    name: [''],
    id: [null]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.phoneForm.valueChanges.subscribe((phone) => this.onChange.emit(phone));
  }

  ngOnChanges(){
    this.phoneForm.patchValue({...this.phone});
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PhoneService } from 'src/app/services/phone.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  phone: any;

  constructor(
    private phoneService: PhoneService,
    private router: Router) { }

  ngOnInit() {
  }

  onClickBack(){
    this.router.navigateByUrl(`/home`);
  }

  onChangePhoneForm(phone) {
    this.phone = {...phone};
  }

  onClickSave(){
    this.phoneService.create(this.phone).subscribe(() => {
      this.router.navigateByUrl(`/home`);
    });
  }
}

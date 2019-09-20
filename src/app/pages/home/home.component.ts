import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { PhoneService } from 'src/app/services/phone.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  phones$ = of([]);

  constructor(
    private router: Router, 
    private phoneServices: PhoneService) { }

  ngOnInit() {
    this.phones$ = this.phoneServices.findAll();
  }

  onClickNewPhone() {
    this.router.navigateByUrl(`/create`);
  }

  goToUpdate(phone) {
    this.router.navigateByUrl(`/update/${phone.id}`);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PhoneService } from 'src/app/services/phone.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  phone: any;

  constructor(
    private snackBar: MatSnackBar,
    private phoneSerivce: PhoneService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.phoneSerivce.findById(this.route.snapshot.paramMap.get('id')).subscribe((phone) => {
      this.phone = {...phone};
    });
  }

  onClickBack(){    
    this.router.navigateByUrl(`/home`);
  }

  onClickSave(){
    this.phoneSerivce.save(this.phone).subscribe(() => {
      this.snackBar.open("Salvo", "Okay", {
        duration: 2000,
      });
    });
  }

  onChangePhoneForm(phone) {
    this.phone = {...phone};
  }

  onClickDelete(){
    this.phoneSerivce.delete(this.phone.id).subscribe(() => {
      this.router.navigateByUrl(`/home`);
    });
  }
}

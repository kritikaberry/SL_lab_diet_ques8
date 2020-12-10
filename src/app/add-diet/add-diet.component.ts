import { Component, OnInit } from '@angular/core';
import { DietService } from '../diet.service';
@Component({
  selector: 'app-add-diet',
  templateUrl: './add-diet.component.html',
  styleUrls: ['./add-diet.component.css']
})
export class AddDietComponent implements OnInit {

  date;
  cal;
  wt;
  ht;
  constructor(private dserv:DietService) { }

  ngOnInit(): void {
  }

  addDiet()
  {
    this.dserv.addtodietlist(this.date,this.cal,this.wt,this.ht);
  }

}

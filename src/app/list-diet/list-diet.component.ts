import { Component, OnInit } from '@angular/core';
import {DietService} from '../diet.service';

@Component({
  selector: 'app-list-diet',
  templateUrl: './list-diet.component.html',
  styleUrls: ['./list-diet.component.css']
})
export class ListDietComponent implements OnInit {
  dietdata;
  constructor(private listdata:DietService) { }

  ngOnInit(): void {
    this.dietdata=this.listdata.dietdetails
  }

}

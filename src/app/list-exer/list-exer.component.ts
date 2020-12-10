import { Component, OnInit } from '@angular/core';
import {ExerService} from '../exer.service';
@Component({
  selector: 'app-list-exer',
  templateUrl: './list-exer.component.html',
  styleUrls: ['./list-exer.component.css']
})
export class ListExerComponent implements OnInit {
  exerdeets;
  constructor(private dataexer:ExerService) { }

  ngOnInit(): void {
    this.exerdeets=this.dataexer.exerdata;
  }

}

import { Component, OnInit } from '@angular/core';
import {ExerService} from '../exer.service';
 
@Component({
  selector: 'app-exer-manager',
  templateUrl: './exer-manager.component.html',
  styleUrls: ['./exer-manager.component.css']
})
export class ExerManagerComponent implements OnInit {
  ename;
  duration;
  daily;

  constructor(private exerlist:ExerService) { }

  ngOnInit(): void {
  }
  addexerdata()
  {
    this.exerlist.addtoexer(this.ename,this.duration,this.daily);
  }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExerService {

  constructor() { }
  exerdata=[{ename:"Squats",duration:"Twice a week",daily:"2"},];
  addtoexer(ename,duration,daily)
  {
    this.exerdata.push({ename,duration,daily});
  }
}

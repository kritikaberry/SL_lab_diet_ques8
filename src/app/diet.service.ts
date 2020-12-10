import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DietService {

  constructor() { }
  dietdetails=[{date:"10/12/2020",cal:"200",wt:"50",ht:"159"}]
  addtodietlist(date,cal,wt,ht)
  {
    this.dietdetails.push({date,cal,wt,ht});
  }
}

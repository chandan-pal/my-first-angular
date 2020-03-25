import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }

  getCurrentDate() : string {
    let curDate = new Date();
    let dateString = curDate.toDateString() + "  " + curDate.toLocaleTimeString();
    return dateString;
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  message : string = "New date message!"
  date : string = new Date().toDateString();

  constructor() {
    setInterval(() => {
      let curDate = new Date();
      this.date = curDate.toDateString() + "  " + curDate.toLocaleTimeString();
    }, 1000);
   }

  ngOnInit(): void {
  }

}

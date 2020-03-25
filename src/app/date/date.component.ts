import { Component, OnInit } from '@angular/core';
import { DateService } from '../date.service'

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  message : string = "New date message!"
  date : string = new Date().toDateString();

  constructor(private dateService: DateService) {
    setInterval(() => {
      this.date = dateService.getCurrentDate();
    }, 1000);
   }

  ngOnInit(): void {
  }

}

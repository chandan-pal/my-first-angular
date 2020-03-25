import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {
  user;

  constructor() {
    this.user = {
      name : "Chandan Pal",
      title : "Software Developer",
      address : "C1-206, Akshar Elementa Society, Tathawade",
      phone : [
        "123-123-123",
        "456-456-456"
      ]
    }
   }

  ngOnInit(): void {
  }

}

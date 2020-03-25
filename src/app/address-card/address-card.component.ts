import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {
  
  @Input('userName')
  userName : string;
  
  user;

  constructor() {
    
   }

  ngOnInit(): void {
    this.user = {
      name : this.userName,
      title : "Software Developer",
      address : "C1-206, Akshar Elementa Society, Tathawade",
      phone : [
        "123-123-123",
        "456-456-456"
      ]
    };
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {
  
  @Input('userName')
  userName : string;
  
  @Input('user')
  user : User;

  isCollapsed : boolean = true;

  constructor() {
    
   }

  ngOnInit(): void {
    
  }

  toggleCollapse() : void {
    this.isCollapsed = !this.isCollapsed;
  }

}

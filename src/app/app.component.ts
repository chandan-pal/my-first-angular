import { Component } from '@angular/core';
import { User } from './address-card/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'New';
  userObj: User;
  inputText = "Initial Value";

  constructor () {
    this.userObj = new User();
    this.userObj.name = "Chandan Pal";
    this.userObj.title = "Software Developer";
    this.userObj.address = "C1-206, Akshar Elementa Society, Tathawade";
    this.userObj.phone = [
        "123-123-123",
        "456-456-456"
      ];
    }
}

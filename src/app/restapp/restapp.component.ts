import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-restapp',
  templateUrl: './restapp.component.html',
  styleUrls: ['./restapp.component.css']
})
export class RestappComponent implements OnInit {

  userName;
  githubUserDetails:any;

  constructor(private http: HttpClient) { }
  
  ngOnInit(): void {
    
  }
  
  search() {
    this.githubUserDetails = undefined; //reset
    let observable = this.http.get('https://api.github.com/users/' + this.userName); //since get here is an async call, no direct responce is recieved
    observable.subscribe((response) => {
      this.githubUserDetails = response;
    })
  }

}

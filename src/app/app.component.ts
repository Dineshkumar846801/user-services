import { Component, OnInit } from '@angular/core';
import { UserServices } from './services/userservices';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit{
  users : {name:string;status:string}[] = [];
  title = 'user-service';
  constructor(private UserServices : UserServices){}

  ngOnInit(): void {
    this.users = this.UserServices.users;
    console.log(this.users)
  }

}

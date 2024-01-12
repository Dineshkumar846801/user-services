import { Component, OnInit } from '@angular/core';
import { UserServices } from './services/userservices';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[UserServices]
})
export class AppComponent implements OnInit{
  users : any = [];
  title = 'user-service';
  constructor(private UserServices : UserServices){}

  ngOnInit(): void {
    this.users = this.UserServices.users;
    console.log(this.users)
  }

}

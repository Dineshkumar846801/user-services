import { Component } from '@angular/core';
import { UserServices } from '../services/userservices';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrl: './add-users.component.css',
  providers:[UserServices]
})
export class AddUsersComponent {
  userName:string = '';
  constructor(private UserServices:UserServices){}
  onAddUsers(){
    this.UserServices.addUser(this.userName,'active')
    console.log('Hello wrold')
  }
}

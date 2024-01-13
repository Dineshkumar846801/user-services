import { Component, Input } from '@angular/core';
import { UserServices } from '../services/userservices';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent  {
  @Input('user') user: any;
  @Input('id') id : number = 0;

  constructor (private UserServices:UserServices){}

    
    onUpdateStatus(status:string) {
      this.UserServices.update(this.id,status);
      // console.log(this.id,status)
    }
}

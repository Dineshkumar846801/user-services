import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input('user') user: any;
  @Input('id') id : number = 0;

  onUpdateStatus(id:number,status:string) {
    this.user[id].status = status;
  }
}

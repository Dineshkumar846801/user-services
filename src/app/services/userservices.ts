import { Injectable } from "@angular/core";
import { LogServices } from "./logservices";

@Injectable()

export class UserServices{
    constructor(private LogServie:LogServices){}
    users = [
        {name:'Dinesh',status:'active'},
        {name:'Dinesh 1',status:'active'},
        {name:'Dinesh 2',status:'active'}
    ]

    addUser(name:string,status:string){
        this.users.push({name,status})
        this.LogServie.LogInStatus(status);
    }
    
    update(id:number,status:string){
        this.users[id].status = status;
        this.LogServie.LogInStatus(status)
    }
}
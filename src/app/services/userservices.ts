export class UserServices{
    users = [
        {name:'Dinesh',status:'active'},
        {name:'Dinesh 1',status:'active'},
        {name:'Dinesh 2',status:'active'}
    ]

    addUser(name:string,status:string){
        this.users.push({name,status})
    }
    
    updat(id:number,status:string){
        this.users[id].status = status;
    }
}
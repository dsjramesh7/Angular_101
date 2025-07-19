import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  private userList:string[]=[]

  getUserList():string[]{
    return [...this.userList]
  }

  addUserInUserList(user:string):void{
    this.userList.push(user)
  }

  deleteUserFromUserList(id:number):void{
    this.userList.splice(id,1)
    console.log("cha");
  }
}

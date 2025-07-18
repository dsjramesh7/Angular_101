import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  private userList:string[]=['Midoriya','Bakuga']

  getUserList():string[]{
    return [...this.userList]
  }

  addUserInUserList(user:string):void{
    this.userList.push(user)
  }
}

import { Component } from '@angular/core';
import { UserService } from '../../../../core/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {  
  users:string[]=[];
  newUser:string="";
  constructor(private userService:UserService){}

  ngOnInit(){
    this.users = this.userService.getUserList();
  }


  addUser(){
    if(this.newUser.trim().length > 0){
      this.userService.addUserInUserList(this.newUser)
      this.users = this.userService.getUserList();
      this.newUser=""
    }
      // console.log(this.newUser);
      // console.log(this.users);
  }
}

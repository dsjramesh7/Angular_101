import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../../../core/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent {
  users: string[] = [];
  newUser: string = '';
  constructor(private userService: UserService) {}

  ngOnInit() {
    // this.users = this.userService.getUserList();
    console.log('✅ UserComponent loaded');
  }

  ngOnDestroy() {
    console.log('❌ UserComponent destroyed');
  }

  addUser() {
    if (this.newUser.trim().length > 0) {
      this.userService.addUserInUserList(this.newUser);
      this.users = this.userService.getUserList();
      this.newUser = '';
    }
    console.log("Added user in an array of users:",this.users);
  }

  deleteUser(indexOfUser: number) {
    if (indexOfUser) {
      this.userService.deleteUserFromUserList(indexOfUser);
    }

    this.users = this.userService.getUserList();
    console.log('After delete the array of users:', this.users);
  }
}

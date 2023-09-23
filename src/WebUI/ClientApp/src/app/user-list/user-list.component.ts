import { Component } from '@angular/core';
import { UsersClient, UserDto } from '../web-api-client';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent {
  public users: UserDto[] = [];

  constructor(private client: UsersClient) {
    client.getAllUsers().subscribe(result => {
      this.users = result;
    }, error => console.error(error));
  }
}

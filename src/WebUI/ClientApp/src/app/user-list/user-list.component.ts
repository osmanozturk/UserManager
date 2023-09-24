import { Component } from '@angular/core';
import { UsersClient, IUserDto } from '../web-api-client';
import { Router } from '@angular/router';

type UserWithFormattedBirthDate = Omit<IUserDto, 'dateOfBirth'> & {dateOfBirth: string};

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
})


export class UserListComponent {
  public users: UserWithFormattedBirthDate[] = [];

  constructor(private client: UsersClient, private router: Router) {
    client.getAllUsers().subscribe(result => {
      this.users = result.map(user => {
        let formattedUser: UserWithFormattedBirthDate = {
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          dateOfBirth: this.formatDate(user.dateOfBirth)
        }
        return formattedUser;
      });
    }, error => console.error(error));
  }

  private formatDate(date: Date): string {
    const offset = date.getTimezoneOffset()
    //Preventing timezone day rollover.
    //DateOfBirth could be stored as string as well since we don't need that precision
    date = new Date(date.getTime() - (offset*60*1000))
    return date.toISOString().split('T')[0]
  }

  goToUser(userId: string) {
    this.router.navigate(['/manage-user'], 
      {queryParams: {userId}
    })
  }
}

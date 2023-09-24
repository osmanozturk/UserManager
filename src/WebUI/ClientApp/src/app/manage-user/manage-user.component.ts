import { Component } from '@angular/core';
import { UsersClient, UserDto } from '../web-api-client';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, Location } from '@angular/common';



@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  imports: [FormsModule, CommonModule],
  standalone: true
})

export class ManageUserComponent {
  public user: UserDto
  public formattedDateOfBirth: string
  public userId: string

  constructor(private client: UsersClient, private route: ActivatedRoute, private location: Location) {
    this.userId = this.route.snapshot.queryParamMap.get('userId');
    this.client.getUserById(this.userId).subscribe(result => {
      this.user = result;
      this.formattedDateOfBirth = this.formatDate(this.user.dateOfBirth)
    }, error => console.error(error));
  }

  formatDate(date: Date): string {
    const offset = date.getTimezoneOffset()
    //Preventing timezone day rollover.
    //DateOfBirth could be stored as string as well since we don't need that precision
    date = new Date(date.getTime() - (offset*60*1000))
    return date.toISOString().split('T')[0]
  }

  updateUser(input: UserDto) {
    input.id = this.userId;
    this.client.updateUser(this.userId, input).subscribe(result => {
      this.location.back()
    }, error => console.error(error));
  }

  deleteUser() {
    this.client.deleteUser(this.userId).subscribe(result => {
      this.location.back()
    }, error => console.error(error));
  }
}

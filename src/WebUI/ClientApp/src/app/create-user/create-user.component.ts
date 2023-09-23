import { Component } from '@angular/core';
import { UsersClient, UserDto } from '../web-api-client';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  imports: [FormsModule],
  standalone: true
})

export class CreateUserComponent {

  constructor(private client: UsersClient) {}

  createUser(input: UserDto): string {
    let response = ""
    this.client.createUser(input).subscribe(result => {
      console.log('response is ', response)
      console.log('input is ', input)
      response = result
    }, error => console.error(error)
    );
    return response
  }
}

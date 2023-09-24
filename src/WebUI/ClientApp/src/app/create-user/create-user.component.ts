import { Component } from '@angular/core';
import { UsersClient, UserDto } from '../web-api-client';
import { FormsModule } from '@angular/forms';
import { Location, CommonModule } from '@angular/common';



@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  imports: [FormsModule, CommonModule],
  standalone: true
})

export class CreateUserComponent {
  public invalidSubmission: boolean
  constructor(private client: UsersClient, private location: Location) {
    this.invalidSubmission = false
  }

  createUser(input: UserDto, isFormValid: boolean): string {
    let response = ""
    if (isFormValid) {
      this.client.createUser(input).subscribe(result => {
        response = result
        this.location.back()
      }, error => console.error(error));
      return response
    }

    else {
      this.invalidSubmission = true
      return response;
    }
  }
}

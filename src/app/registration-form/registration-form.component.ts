import { Component, OnInit } from '@angular/core';

interface User {
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent {
  user: User = {
    firstName: 'Shravan',
    lastName: 'kasagoni'
  };

  onSubmit(formValue) {
    console.log(formValue);
  }

}

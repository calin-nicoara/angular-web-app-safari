import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-registration-reactive-form',
  templateUrl: './registration-reactive-form.component.html',
  styleUrls: ['./registration-reactive-form.component.scss']
})
export class RegistrationReactiveFormComponent implements OnInit {

  EMAIL_REGEX = "[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-" +
    "]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*";

  registrationForm: FormGroup;

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      firstName: ['Shravan', Validators.required],
      lastName: '',
      email: ['', [Validators.required,
        Validators.pattern(this.EMAIL_REGEX)]],
      address: this.formBuilder.group({
        street: '',
        city: ['', Validators.required],
        state: ['', Validators.required],
        zip: '',
        country: ['', Validators.required]
      })
    });
  }

  onSubmit(formValue) {
    console.log(formValue);
    console.log(this.registrationForm.value);
  }

}

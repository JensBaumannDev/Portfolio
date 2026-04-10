import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Footer } from '../footer/footer';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { forbiddenNameValidator } from './validator';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [TranslatePipe, Footer, ReactiveFormsModule],
  templateUrl: './contact-me.html',
  styleUrl: './contact-me.scss',
})
export class ContactMe {
  userform = new FormGroup({
    name: new FormControl('', {
      validators: [Validators.required, Validators.minLength(4)],
    }),
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
    }),
    request: new FormControl('', {
      validators: [Validators.required, Validators.minLength(5)],
    }),
    privacyPolicy: new FormControl(false, {
      validators: [Validators.requiredTrue],
    }),
  });

  formSubmit() {
    this.userform.value;
  }

  formReset() {
    this.userform.reset();
  }
}

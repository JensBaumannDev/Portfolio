import { Component, inject, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Footer } from '../footer/footer';
import { NgOptimizedImage } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [TranslatePipe, Footer, ReactiveFormsModule, NgOptimizedImage],
  templateUrl: './contact-me.html',
  styleUrl: './contact-me.scss',
})
export class ContactMe {
  private readonly fb = inject(FormBuilder);

  protected readonly userform = this.fb.group({
    name: ['', { validators: [Validators.required, Validators.minLength(4)], nonNullable: true }],
    email: ['', { validators: [Validators.required, Validators.email], nonNullable: true }],
    request: [
      '',
      { validators: [Validators.required, Validators.minLength(5)], nonNullable: true },
    ],
    privacyPolicy: [false, { validators: [Validators.requiredTrue], nonNullable: true }],
  });

  protected readonly isSubmitted = signal(false);

  formSubmit() {
    if (this.userform.valid) {
      const formData = this.userform.getRawValue();
      console.log('Sending message:', formData);

      this.isSubmitted.set(true);

      setTimeout(() => {
        this.formReset();
      }, 5000);
    }
  }

  markPrivacyAsTouched() {
    this.userform.controls.privacyPolicy.markAsTouched();
  }

  formReset() {
    this.userform.reset();
    this.isSubmitted.set(false);
  }
}

import { Component, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslatePipe } from '@ngx-translate/core';
import { Footer } from '../footer/footer';
import { NgOptimizedImage } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [TranslatePipe, Footer, ReactiveFormsModule, NgOptimizedImage, RouterLink],
  templateUrl: './contact-me.html',
  styleUrl: './contact-me.scss',
})
export class ContactMe {
  private readonly fb = inject(FormBuilder);
  private readonly http = inject(HttpClient);

  protected readonly userform = this.fb.group({
    name: [
      '',
      {
        validators: [Validators.required, Validators.minLength(4)],
        nonNullable: true,
        updateOn: 'change',
      },
    ],
    email: [
      '',
      {
        validators: [Validators.required, Validators.email],
        nonNullable: true,
        updateOn: 'change',
      },
    ],
    request: [
      '',
      {
        validators: [Validators.required, Validators.minLength(5)],
        nonNullable: true,
        updateOn: 'change',
      },
    ],
    privacyPolicy: [
      false,
      { validators: [Validators.requiredTrue], nonNullable: true, updateOn: 'change' },
    ],
  });

  protected readonly isSubmitted = signal(false);

  formSubmit() {
    if (this.userform.valid) {
      const formData = this.userform.getRawValue();

      this.http.post('sendMail.php', formData).subscribe({
        next: (response) => {
          this.isSubmitted.set(true);
          setTimeout(() => {
            this.formReset();
          }, 5000);
        },
        error: (error) => {
          console.error('Error sending message', error);
          alert('Ups! Da gab es ein Problem beim Versenden. Bitte versuche es später noch einmal oder kontaktiere mich direkt per E-Mail.');
        }
      });
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

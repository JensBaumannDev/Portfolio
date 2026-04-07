import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Footer } from "../footer/footer";

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [TranslatePipe, Footer],
  templateUrl: './contact-me.html',
  styleUrl: './contact-me.scss',
})
export class ContactMe {}

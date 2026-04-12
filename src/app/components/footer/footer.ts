import { Component, Input, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslatePipe, RouterLink, NgOptimizedImage],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  encapsulation: ViewEncapsulation.None,
})
export class Footer {
  @Input() isBlackMode = false;
}

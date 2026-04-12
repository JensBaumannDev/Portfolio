import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-colleagues-thoughts',
  standalone: true,
  imports: [TranslatePipe, NgOptimizedImage],
  templateUrl: './colleagues-thoughts.html',
  styleUrl: './colleagues-thoughts.scss',
})
export class ColleaguesThoughts {}

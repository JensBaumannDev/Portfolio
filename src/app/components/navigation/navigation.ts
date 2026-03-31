import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss',
})
export class Navigation {

  navLinks = [
    { label: 'About me', img: 'assets/00_Hand-drawn-lines/00_Header/Color_option_2/1.png' },
    { label: 'Skills', img: 'assets/00_Hand-drawn-lines/00_Header/Color_option_2/2.png' },
    { label: 'Projects', img: 'assets/00_Hand-drawn-lines/00_Header/Color_option_2/4.png' },
    { label: 'Contact', img: 'assets/00_Hand-drawn-lines/00_Header/Color_option_2/3.png' },
  ];


  languages = [
    { code: 'EN', img: 'assets/00_Hand-drawn-lines/00_Header/Color_option_2/Toggle.png' },
    { code: 'DE', img: 'assets/00_Hand-drawn-lines/00_Header/Color_option_2/Toggle.png' },
  ];

  private activeLanguageCode = 'EN';

  get activeLangCode(): string {
    return this.activeLanguageCode;
  }

  setLanguage(langCode: string): void {
    this.activeLanguageCode = langCode;
  }
}
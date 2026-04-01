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
    { label: 'About me', img: '/img/00_Hand-drawn-lines/00_Header/Color_option_2/1.png' },
    { label: 'Skills', img: '/img/00_Hand-drawn-lines/00_Header/Color_option_2/2.png' },
    { label: 'Projects', img: '/img/00_Hand-drawn-lines/00_Header/Color_option_2/4.png' },
    { label: 'Contact', img: '/img/00_Hand-drawn-lines/00_Header/Color_option_2/3.png' },
  ];


  languages = [
    { code: 'EN', img: '/img/00_Hand-drawn-lines/00_Header/Color_option_2/Toggle.png' },
    { code: 'DE', img: '/img/00_Hand-drawn-lines/00_Header/Color_option_2/Toggle.png' },
  ];

  private activeLanguageCode = 'EN';

  get activeLangCode(): string {
    return this.activeLanguageCode;
  }

  setLanguage(langCode: string): void {
    this.activeLanguageCode = langCode;
  }
}
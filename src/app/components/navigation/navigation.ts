import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss',
})
export class Navigation {

  navLinksDE = [
    { label: 'Über Mich', img: '/img/00_Hand-drawn-lines/00_Header/Color_option_3/1.png' },
    { label: 'Skills', img: '/img/00_Hand-drawn-lines/00_Header/Color_option_3/2.png' },
    { label: 'Projekte', img: '/img/00_Hand-drawn-lines/00_Header/Color_option_3/4.png' },
    { label: 'Kontakt', img: '/img/00_Hand-drawn-lines/00_Header/Color_option_3/3.png' },
  ];

    navLinksEN = [
    { label: 'About me', img: '/img/00_Hand-drawn-lines/00_Header/Color_option_3/1.png' },
    { label: 'Skills', img: '/img/00_Hand-drawn-lines/00_Header/Color_option_3/2.png' },
    { label: 'Projects', img: '/img/00_Hand-drawn-lines/00_Header/Color_option_3/4.png' },
    { label: 'Contact', img: '/img/00_Hand-drawn-lines/00_Header/Color_option_3/3.png' },
  ];


  languages = [
    { code: 'EN', img: '/img/00_Hand-drawn-lines/00_Header/Color_option_2/Toggle.png' },
    { code: 'DE', img: '/img/00_Hand-drawn-lines/00_Header/Color_option_2/Toggle.png' },
  ];

  private activeLanguageCode = 'DE';

  constructor(private translate: TranslateService) {
    const initialLang = this.translate.getCurrentLang() || 'de';
    this.activeLanguageCode = initialLang.toUpperCase() === 'EN' ? 'EN' : 'DE';
    this.translate.use(this.activeLanguageCode.toLowerCase());
  }

  get activeLangCode(): string {
    return this.activeLanguageCode;
  }

  setLanguage(langCode: string): void {
    this.activeLanguageCode = langCode;
    this.translate.use(langCode.toLowerCase());
  }
}
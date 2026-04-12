import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
  HostListener,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { SOCIAL_LINKS } from '../social-links/social-links.data';

@Component({
  selector: 'app-navigation',
  imports: [RouterModule, CommonModule],
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Navigation {
  private readonly translate = inject(TranslateService);
  readonly socialLinks = SOCIAL_LINKS;

  readonly navLinksDE = [
    {
      label: 'Über Mich',
      img: 'img/00_Hand-drawn-lines/00_Header/Color_option_3/1.png',
      fragment: 'about-me',
    },
    {
      label: 'Skills',
      img: 'img/00_Hand-drawn-lines/00_Header/Color_option_3/2.png',
      fragment: 'skills',
    },
    {
      label: 'Projekte',
      img: 'img/00_Hand-drawn-lines/00_Header/Color_option_3/4.png',
      fragment: 'projects',
    },
    {
      label: 'Kontakt',
      img: 'img/00_Hand-drawn-lines/00_Header/Color_option_3/3.png',
      fragment: 'contact',
    },
  ];

  readonly navLinksEN = [
    {
      label: 'About me',
      img: 'img/00_Hand-drawn-lines/00_Header/Color_option_3/1.png',
      fragment: 'about-me',
    },
    {
      label: 'Skills',
      img: 'img/00_Hand-drawn-lines/00_Header/Color_option_3/2.png',
      fragment: 'skills',
    },
    {
      label: 'Projects',
      img: 'img/00_Hand-drawn-lines/00_Header/Color_option_3/4.png',
      fragment: 'projects',
    },
    {
      label: 'Contact',
      img: 'img/00_Hand-drawn-lines/00_Header/Color_option_3/3.png',
      fragment: 'contact',
    },
  ];

  readonly isMenuOpen = signal(false);
  readonly activeLanguageCode = signal('DE');
  readonly currentNavLinks = computed(() =>
    this.activeLanguageCode() === 'EN' ? this.navLinksEN : this.navLinksDE
  );

  constructor() {
    const initialLang = this.translate.getCurrentLang() || 'de';
    const normalizedLang = initialLang.toUpperCase() === 'EN' ? 'EN' : 'DE';
    this.activeLanguageCode.set(normalizedLang);
    this.translate.use(normalizedLang.toLowerCase());
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.isMenuOpen()) {
      this.closeMenu();
    }
  }

  get activeLangCode(): string {
    return this.activeLanguageCode();
  }

  toggleMenu(): void {
    this.isMenuOpen.set(!this.isMenuOpen());
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }

  setLanguage(langCode: string): void {
    this.activeLanguageCode.set(langCode);
    this.translate.use(langCode.toLowerCase());
  }

  toggleLanguage(): void {
    const nextLang = this.activeLanguageCode() === 'EN' ? 'DE' : 'EN';
    this.setLanguage(nextLang);
  }
}
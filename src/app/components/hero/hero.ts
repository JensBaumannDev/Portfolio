import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  QueryList,
  ViewChildren,
  inject,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { NgOptimizedImage } from '@angular/common';
import { Navigation } from '../navigation/navigation';
import { SOCIAL_LINKS } from '../social-links/social-links.data';

@Component({
  selector: 'app-hero',
  imports: [Navigation, TranslatePipe, RouterLink, NgOptimizedImage],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero implements AfterViewInit {

  // #region Services

  private readonly destroyRef = inject(DestroyRef);
  private readonly translate = inject(TranslateService);

  // #endregion

  // #region View Ref

  @ViewChildren('swapButton')
  private readonly swapButtons!: QueryList<ElementRef<HTMLButtonElement>>;

  // #endregion

  // #region State

  readonly isRightHovered = signal(false);

  // #endregion

  // #region Data

  readonly socialLinks = SOCIAL_LINKS;

  readonly headlineText = {
    fullstack: ['F', 'u', 'l', 'l', 's', 't', 'a', 'c', 'k'],
    developer: ['D', 'E', 'V', 'E', 'L', 'O', 'P', 'E', 'R'],
  };

  // #endregion

  // #region Lifecycle

  ngAfterViewInit(): void {
    const init = () => requestAnimationFrame(this.remeasure);

    if (document.fonts?.ready) {
      void document.fonts.ready.then(init);
    } else {
      init();
    }

    this.translate.onLangChange
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => requestAnimationFrame(this.remeasure));

    window.addEventListener('resize', this.remeasure);
    this.destroyRef.onDestroy(() => window.removeEventListener('resize', this.remeasure));
  }

  // #endregion

  // #region Template Methods

  isUppercase(letter: string): boolean {
    return letter === letter.toUpperCase();
  }

  setRightHoverState(isHovered: boolean): void {
    this.isRightHovered.set(isHovered);
  }

  // #endregion

  // #region Button Width

  private readonly remeasure = () =>
    this.swapButtons.forEach(({ nativeElement }) => this.measure(nativeElement));

  private measure(btn: HTMLButtonElement): void {
    const def = btn.querySelector<HTMLElement>('.hero-label--default');
    const hov = btn.querySelector<HTMLElement>('.hero-label--hover');
    if (!def || !hov) return;

    const s = window.getComputedStyle(btn);
    const extras =
      parseFloat(s.paddingLeft) +
      parseFloat(s.paddingRight) +
      parseFloat(s.borderLeftWidth) +
      parseFloat(s.borderRightWidth);

    const defW = Math.ceil(def.getBoundingClientRect().width + extras);
    const hovW = Math.ceil(hov.getBoundingClientRect().width + extras);

    btn.style.setProperty('--btn-default-width', `${defW}px`);
    btn.style.setProperty('--btn-hover-width', `${hovW}px`);
  }

  // #endregion
}




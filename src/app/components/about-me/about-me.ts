import { Component, signal, OnInit, OnDestroy, NgZone, inject, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [TranslatePipe, RouterLink, NgOptimizedImage],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutMe implements OnInit, OnDestroy {
  private readonly ngZone = inject(NgZone);
  isMobile = signal(false);

  private mobileQuery!: MediaQueryList;
  private listener = (e: MediaQueryListEvent) =>
    this.ngZone.run(() => this.isMobile.set(e.matches));

  ngOnInit() {
    this.mobileQuery = window.matchMedia('(max-width: 768px)');
    this.isMobile.set(this.mobileQuery.matches);
    this.mobileQuery.addEventListener('change', this.listener);
  }

  ngOnDestroy() {
    this.mobileQuery.removeEventListener('change', this.listener);
  }
}

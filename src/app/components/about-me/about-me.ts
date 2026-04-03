import { Component, signal, OnInit, OnDestroy, NgZone } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss',
})
export class AboutMe implements OnInit, OnDestroy {
  isMobile = signal(false);

  private mobileQuery!: MediaQueryList;
  private listener = (e: MediaQueryListEvent) =>
    this.ngZone.run(() => this.isMobile.set(e.matches));

  constructor(private ngZone: NgZone) {}

  ngOnInit() {
    this.mobileQuery = window.matchMedia('(max-width: 768px)');
    this.isMobile.set(this.mobileQuery.matches);
    this.mobileQuery.addEventListener('change', this.listener);
  }

  ngOnDestroy() {
    this.mobileQuery.removeEventListener('change', this.listener);
  }
}

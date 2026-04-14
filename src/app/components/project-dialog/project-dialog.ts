import {
  Component,
  Input,
  Output,
  EventEmitter,
  signal,
  OnInit,
  OnDestroy,
  NgZone,
  inject,
} from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { Navigation } from '../navigation/navigation';

export interface Project {
  title: string;
  technologies: string[];
  descriptionKey: string;
  implementationKey: string;
  durationKey: string;
  image: string;
  detailImage?: string;
  githubLink: string;
  liveLink: string;
}

@Component({
  selector: 'app-project-dialog',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, TranslatePipe, Navigation],
  templateUrl: './project-dialog.html',
  styleUrl: './project-dialog.scss',
})
export class ProjectDialog implements OnInit, OnDestroy {
  @Input() project: Project | null = null;
  @Output() close = new EventEmitter<void>();

  private readonly ngZone = inject(NgZone);
  isTabletOrMobile = signal(false);
  private mobileQuery!: MediaQueryList;
  private listener = (e: MediaQueryListEvent) =>
    this.ngZone.run(() => this.isTabletOrMobile.set(e.matches));

  ngOnInit() {
    this.mobileQuery = window.matchMedia('(max-width: 1024px)');
    this.isTabletOrMobile.set(this.mobileQuery.matches);
    this.mobileQuery.addEventListener('change', this.listener);
  }

  ngOnDestroy() {
    this.mobileQuery.removeEventListener('change', this.listener);
  }

  @Output() next = new EventEmitter<void>();
  @Output() prev = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }

  onNext() {
    this.next.emit();
  }

  onPrev() {
    this.prev.emit();
  }
}

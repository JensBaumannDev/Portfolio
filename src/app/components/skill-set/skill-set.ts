import { Component, signal, OnInit, OnDestroy, NgZone } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Footer } from "../footer/footer";

@Component({
  selector: 'app-skill-set',
  standalone: true,
  imports: [TranslatePipe, Footer],
  templateUrl: './skill-set.html',
  styleUrl: './skill-set.scss',
})
export class SkillSet implements OnInit, OnDestroy {
  skills = [
    { name: 'HTML', icon: 'icons/skills/html.svg' },
    { name: 'CSS', icon: 'icons/skills/css.svg' },
    { name: 'JavaScript', icon: 'icons/skills/javascript.svg' },
    { name: 'TypeScript', icon: 'icons/skills/typescript.svg' },
    { name: 'Angular', icon: 'icons/skills/angular.svg' },
    { name: 'Supabase', icon: 'icons/skills/supabase.svg' },
    { name: 'Git', icon: 'icons/skills/git.svg' },
    { name: 'REST-API', icon: 'icons/skills/rest-api.svg' },
    { name: 'Scrum', icon: 'icons/skills/scrum.svg' },
    { name: 'Material Design', icon: 'icons/skills/material-design.png' },
  ];

  interestedSkills = [
    { name: 'Python', icon: 'icons/skills/python.svg' },
    { name: 'Django', icon: 'icons/skills/django.svg' },
  ];

  isMobile = signal(false);
  peeled = signal<false | 'out' | 'in'>(false);
  private mobileQuery!: MediaQueryList;
  private listener = (e: MediaQueryListEvent) =>
    this.ngZone.run(() => this.isMobile.set(e.matches));

  constructor(private ngZone: NgZone) {}

  ngOnInit() {
    this.mobileQuery = window.matchMedia('(max-width: 1024px)');
    this.isMobile.set(this.mobileQuery.matches);
    this.mobileQuery.addEventListener('change', this.listener);
  }

  ngOnDestroy() {
    this.mobileQuery.removeEventListener('change', this.listener);
  }

  triggerPeel() {
    if (this.peeled() === false) {
      this.peeled.set('out');
    } else if (this.peeled() === 'out') {
      this.peeled.set('in');
      setTimeout(() => this.ngZone.run(() => this.peeled.set(false)), 400);
    }
  }

  isMobileView() {
    return this.isMobile();
  }
}

import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Navigation } from '../navigation/navigation';
import { SOCIAL_LINKS } from '../social-links/social-links.data';

@Component({
  selector: 'app-hero',
  imports: [Navigation, TranslatePipe],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {
  readonly isRightHovered = signal(false);
  readonly socialLinks = SOCIAL_LINKS;

  readonly headlineText = {
    fullstack: ['F', 'u', 'l', 'l', 's', 't', 'a', 'c', 'k'],
    developer: ['D', 'E', 'V', 'E', 'L', 'O', 'P', 'E', 'R'],
  };

  isUppercase(letter: string): boolean {
    return letter === letter.toUpperCase();
  }

  setRightHoverState(isHovered: boolean): void {
    this.isRightHovered.set(isHovered);
  }
}




import { Component, computed, signal } from '@angular/core';
import { Navigation } from "../navigation/navigation";
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [Navigation,TranslatePipe],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  readonly isRightHovered = signal(false);
  readonly isNameHovered = signal(false);
  readonly nameLabelKey = computed(() =>
    this.isNameHovered() ? 'hero.nameHover' : 'hero.nameDefault'
  );

  headlineText = {
    fullstack: ['F', 'u', 'l', 'l', 's', 't', 'a', 'c', 'k'],
     developer: ['D', 'E', 'V', 'E', 'L', 'O', 'P', 'E', 'R'],
  };

  isUppercase(letter: string): boolean {
    return letter === letter.toUpperCase();
  }

  setRightHoverState(isHovered: boolean): void {
    this.isRightHovered.set(isHovered);
  }

  setNameHoverState(isHovered: boolean): void {
    this.isNameHovered.set(isHovered);
  }
}



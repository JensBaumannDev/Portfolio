import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  headlineText = {
    fullstack: ['F', 'u', 'l', 'l', 's', 't', 'a', 'c', 'k'],
     developer: ['D', 'E', 'V', 'E', 'L', 'O', 'P', 'E', 'R'],
  };

  isUppercase(letter: string): boolean {
    return letter === letter.toUpperCase();
  }
}

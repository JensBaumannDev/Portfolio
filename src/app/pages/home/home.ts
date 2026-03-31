import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { AboutMe } from '../../components/about-me/about-me';
import { SkillSet } from '../../components/skill-set/skill-set';
import { Projects } from '../../components/projects/projects';
import { ColleaguesThoughts } from '../../components/colleagues-thoughts/colleagues-thoughts';
import { ContactMe } from '../../components/contact-me/contact-me';

@Component({
  selector: 'app-home',
  imports: [Hero, AboutMe, SkillSet, Projects, ColleaguesThoughts, ContactMe],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
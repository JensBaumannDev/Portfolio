import { Component } from '@angular/core';

@Component({
  selector: 'app-skill-set',
  standalone: true,
  imports: [],
  templateUrl: './skill-set.html',
  styleUrl: './skill-set.scss',
})
export class SkillSet {
  skills = [
    { name: 'HTML',           icon: 'icons/skills/html.svg' },
    { name: 'CSS',            icon: 'icons/skills/css.svg' },
    { name: 'JavaScript',     icon: 'icons/skills/javascript.svg' },
    { name: 'TypeScript',     icon: 'icons/skills/typescript.svg' },
    { name: 'Angular',        icon: 'icons/skills/angular.svg' },
    { name: 'Supabase',       icon: 'icons/skills/supabase.svg' },
    { name: 'Git',            icon: 'icons/skills/git.svg' },
    { name: 'REST-API',       icon: 'icons/skills/rest-api.svg' },
    { name: 'Scrum',          icon: 'icons/skills/scrum.svg' },
    { name: 'Material Design',icon: 'icons/skills/material-design.png' },
  ];
}

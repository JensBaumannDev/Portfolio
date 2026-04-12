import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { NgOptimizedImage } from '@angular/common';

interface Project {
  title: string;
  technologies: string[];
  descriptionKey: string;
  image: string;
  githubLink: string;
  liveLink: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [TranslatePipe, NgOptimizedImage],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projects: Project[] = [
    {
      title: 'Join',
      technologies: [],
      descriptionKey: 'projects.join.description',
      image: 'img/06_projects/Laptop.png',
      githubLink: 'https://github.com/JensBaumannDev/Join',
      liveLink: 'https://jens-baumann.developerakademie.net/join/index.html',
    },
    {
      title: 'El Pollo Loco',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      descriptionKey: 'projects.pollo.description',
      image: 'img/06_projects/Pollo.png',
      githubLink: 'https://github.com/JensBaumannDev/el-pollo-loco',
      liveLink: 'https://jens-baumann.developerakademie.net/el-pollo-loco/index.html',
    },
    {
      title: 'Pokedex',
      technologies: ['JavaScript', 'HTML', 'CSS', 'Api'],
      descriptionKey: 'projects.pokedex.description',
      image: 'img/06_projects/pokedex.png',
      githubLink: 'https://github.com/JensBaumannDev/pokedex',
      liveLink: 'https://jens-baumann.developerakademie.net/pokedex/index.html',
    },
  ];
}

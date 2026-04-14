import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { NgOptimizedImage } from '@angular/common';
import { ProjectDialog, Project } from '../project-dialog/project-dialog';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [TranslatePipe, NgOptimizedImage, ProjectDialog],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  selectedProject: Project | null = null;

  openDialog(project: any) {
    this.selectedProject = project;
    if (typeof document !== 'undefined') {
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    }
  }

  closeDialog() {
    this.selectedProject = null;
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      document.body.style.paddingRight = '';
    }
  }

  nextProject() {
    if (!this.selectedProject) return;
    const currentIndex = this.projects.indexOf(this.selectedProject);
    const nextIndex = (currentIndex + 1) % this.projects.length;
    this.selectedProject = this.projects[nextIndex];
  }

  prevProject() {
    if (!this.selectedProject) return;
    const currentIndex = this.projects.indexOf(this.selectedProject);
    const prevIndex = (currentIndex - 1 + this.projects.length) % this.projects.length;
    this.selectedProject = this.projects[prevIndex];
  }

  projects: Project[] = [
    {
      title: 'Join',
      technologies: ['JavaScript', 'HTML', 'CSS', 'Firebase'],
      descriptionKey: 'projects.join.description',
      implementationKey: 'projects.join.implementation',
      durationKey: 'projects.join.duration',
      image: 'img/06_projects/Laptop.png',
      detailImage: 'img/06_projects/join.png',
      githubLink: 'https://github.com/JensBaumannDev/Join',
      liveLink: 'https://jens-baumann.developerakademie.net/join/index.html',
    },
    {
      title: 'El Pollo Loco',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      descriptionKey: 'projects.pollo.description',
      implementationKey: 'projects.pollo.implementation',
      durationKey: 'projects.pollo.duration',
      image: 'img/06_projects/Pollo.png',
      githubLink: 'https://github.com/JensBaumannDev/El-Pollo-Loco',
      liveLink: 'https://jensbaumann.com/projects/el_pollo_loco/index.html',
    },
    {
      title: 'Pokedex',
      technologies: ['JavaScript', 'HTML', 'CSS', 'Api'],
      descriptionKey: 'projects.pokedex.description',
      implementationKey: 'projects.pokedex.implementation',
      durationKey: 'projects.pokedex.duration',
      image: 'img/06_projects/pokedex.png',
      githubLink: 'https://github.com/JensBaumannDev/Pokedex',
      liveLink: 'https://jensbaumann.com/projects/Pokedex/index.html',
    },
  ];
}

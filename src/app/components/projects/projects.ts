import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'My Portfolio Website',
      description: 'A personal portfolio web application built with Angular and GitHub Pages.',
      tech: ['Angular', 'TypeScript', 'CSS']
    },
    {
      title: 'title',
      description: 'desc.',
      tech: ['Angular', 'RxJS', 'Tailwind CSS']
    },
    {
      title: 'title',
      description: 'desc.',
      tech: ['TypeScript', 'HTML5', 'CSS3']
    }
  ];
}
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
      title: 'Angular Portfolio',
      description: 'A personal portfolio web application built with Angular and GitHub Pages.',
      tech: ['Angular', 'TypeScript', 'CSS']
    },
    {
      title: 'E-Commerce Dashboard',
      description: 'Administrative dashboard featuring data visualizations and user state handling.',
      tech: ['Angular', 'RxJS', 'Tailwind CSS']
    },
    {
      title: 'Task Manager App',
      description: 'Productivity application for organizing daily tasks with local storage persistence.',
      tech: ['TypeScript', 'HTML5', 'CSS3']
    }
  ];
}
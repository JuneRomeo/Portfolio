
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
      link: 'https://juneromeo.github.io/Portfolio/',
      imageName: 'portfolioimg.png',
      tech: ['Angular', 'TypeScript', 'CSS']
    },
    {
      title: 'Araneta Lost and Found',
      description: 'A full-stack Lost and Found Management System built with Angular, Node.js, Express, and MongoDB. The frontend is deployed on GitHub Pages for demonstration purposes and is currently not connected to the backend or database.',
      link: 'https://juneromeo.github.io/lost-and-found-system/',
      imageName: 'alaf.png',
      tech: ['Angular', 'Node.js', 'Express', 'MongoDB', 'TypeScript', 'CSS']
    }
  ];
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrls: ['./experience.css']
})
export class ExperienceComponent {
  experiences = [
    {
      role: 'Frontend Developer',
      company: 'Tech Solutions Inc.',
      period: '2024 - Present',
      description: 'Developing modern, responsive web applications using Angular, TypeScript, and standard CSS. Collaborated with teams to deliver high-performance user interfaces.'
    },
    {
      role: 'Junior Web Developer',
      company: 'Digital Agency',
      period: '2023 - 2024',
      description: 'Built and maintained client websites using HTML, CSS, JavaScript, and initial Angular frameworks. Optimized component structures for speed and maintainability.'
    }
  ];

  certifications = [
    {
      title: 'Angular Developer Certification',
      issuer: 'Frontend Masters',
      date: '2025',
      description: 'Advanced mastery of Angular architecture, reactive forms, RxJS, and standalone components.'
    },
    {
      title: 'Modern JavaScript & TypeScript',
      issuer: 'Udemy',
      date: '2024',
      description: 'Comprehensive study of ES6+ features, asynchronous JavaScript, and static typing with TypeScript.'
    }
  ];
}
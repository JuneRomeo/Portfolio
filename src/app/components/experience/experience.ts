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
      role: 'Noc Intern',
      company: 'Magellan Solutions',
      period: '2025',
      description: 'Engaged in hands-on training and professional development in a corporate setting, expanding my understanding of software and systems while helping with day to day IT support and monitoring.'
    }
  ];

  certifications = [
    {
      title: 'Scrum Fundamentals Certified (SFC)',
      issuer: 'Scrumstudy',
      date: '2026',
      description: 'Gained foundational knowledge of Scrum framework principles, team roles, and agile project management methodologies. (Credential ID: 1194728)'
    },
    {
      title: 'EF SET English Certificate 73/100 (C2 Proficient)',
      issuer: 'EF SET',
      date: '2026',
      description: 'Demonstrated advanced proficiency in English language skills, including grammar, vocabulary, and communication.'
    }
  ];




  seminars = [
    {
      title: 'From Traditional to Agile: Evolving Project Management Practices',
      date: '2025',
      issuer: 'De La Salle Araneta University - La Salle Araneta Computer Engineering Society',
      description: ''
    },
    {
      title: 'From Ground To Cloud: Building Seamless Connectivity',
      date: '2025',
      issuer: 'Institute of Computer Engineers of the Philippines - Student Edition - NCR',
      description: ''
    },
    {
      title: 'From Raw Data to Business Decisions: A Practical Introduction to Business Intelligence',
      date: '2025',
      issuer: 'De La Salle Araneta University - Junior Philippine Computer Society DLSAU',
      description: ''
    },
    {
      title: 'Building Cloud-Native Telecom Services: An Introduction to SDN-NFV',
      date: '2025',
      issuer: 'Colegio De San Pedro',
      description: ''
    },
    {
      title: 'Exploring the Convergence of AI and Robotics',
      date: '2025',
      issuer: 'Colegio De San Pedro',
      description: ''
    }

  ];


}
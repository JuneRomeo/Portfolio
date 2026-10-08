import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home';
import { ExperienceComponent } from './components/experience/experience';
import { ProjectsComponent } from './components/projects/projects';
import { ContactComponent } from './components/contact/contact';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    HomeComponent, 
    ExperienceComponent, 
    ProjectsComponent, 
    ContactComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  activeTab: 'home' | 'experience' | 'projects' | 'contact' = 'home';

  setTab(tab: 'home' | 'experience' | 'projects' | 'contact') {
    this.activeTab = tab;
  }
}
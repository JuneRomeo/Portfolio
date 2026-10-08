import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {
  name = 'Engr. June Romeo L. Ongoco';
  
  bio = 'A Computer Engineering graduate dedicated to writing clean code, resolving complex technical issues, and maintaining structured, efficient systems.';
}
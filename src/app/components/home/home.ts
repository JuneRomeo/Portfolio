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
  name = 'June Romeo';
  role = 'Frontend Developer';
  bio = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti dolorum eum laudantium, unde voluptatem nemo non exercitationem neque ab delectus voluptas asperiores architecto ad eveniet mollitia provident harum pariatur porro.';
}
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  projects = [
    {
      'img': 'assets/portfolioImg/elPolloLoco.png',
      'name': 'El Pollo Loco',
      'usedTech': 'JavaScript | HTML | CSS | OOP',
      'description': '',
      'gitHubURL': '',
      'liveTestURL': ''
    },
    {
      'img': 'assets/portfolioImg/pokedex.png',
      'name': 'Pokedex',
      'usedTech': 'JavaScript | HTML | CSS | API',
      'description': '',
      'gitHubURL': '',
      'liveTestURL': ''
    },
    {
      'img': 'assets/portfolioImg/join.png',
      'name': 'Join',
      'usedTech': 'JavaScript | HTML | CSS',
      'description': '',
      'gitHubURL': '',
      'liveTestURL': ''
    }
  ];
}

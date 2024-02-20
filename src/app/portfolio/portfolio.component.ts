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
      'description': 'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe Peligroso collecting coins and salsa bottles and to fight against el pollo loco.',
      'gitHubURL': '',
      'liveTestURL': ''
    },
    {
      'img': 'assets/portfolioImg/pokedex.png',
      'name': 'Pokédex',
      'usedTech': 'JavaScript | HTML | CSS | API',
      'description': 'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      'gitHubURL': '',
      'liveTestURL': ''
    },
    {
      'img': 'assets/portfolioImg/join.png',
      'name': 'Join',
      'usedTech': 'JavaScript | HTML | CSS',
      'description': 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      'gitHubURL': '',
      'liveTestURL': ''
    }
  ];
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  constructor(public translate: TranslateService) { }


  projects = [
    {
      'img': 'assets/portfolioImg/elPolloLoco.png',
      'name': 'El Pollo Loco',
      'usedTech': 'JavaScript | HTML | CSS | OOP',
      'description': 'descriptionKey.elPolloLoco',
      'gitHubURL': 'https://github.com/GDR1909/El_Pollo_Loco',
      'liveTestURL': ''
    },
    {
      'img': 'assets/portfolioImg/pokedex.png',
      'name': 'Pokédex',
      'usedTech': 'JavaScript | HTML | CSS | API',
      'description': 'descriptionKey.pokedex',
      'gitHubURL': 'https://github.com/GDR1909/Pokedex',
      'liveTestURL': ''
    },
    {
      'img': 'assets/portfolioImg/join.png',
      'name': 'Join',
      'usedTech': 'JavaScript | HTML | CSS',
      'description': 'descriptionKey.join',
      'gitHubURL': 'https://github.com/GDR1909/Join',
      'liveTestURL': ''
    }
  ];
}
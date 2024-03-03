import { Component } from '@angular/core';
import { PortfolioService } from '../portfolio.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private portfolioService: PortfolioService) { }

  openMenu() {
    this.portfolioService.openMenu();
  }
}
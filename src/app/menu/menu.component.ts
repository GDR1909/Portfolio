import { Component } from '@angular/core';
import { PortfolioService } from '../portfolio.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  constructor(private portfolioService: PortfolioService) { }


  closeMenu() {
    this.portfolioService.closeMenu();
  }
}
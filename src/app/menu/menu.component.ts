import { Component } from '@angular/core';
import { PortfolioService } from '../portfolio.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  constructor(private portfolioService: PortfolioService) { }


  closeMenu() {
    this.portfolioService.closeMenu();
  }
}
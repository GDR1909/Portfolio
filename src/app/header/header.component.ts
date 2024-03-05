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
  menuIconSrc: string = 'assets/img/menuIcon.png';
  clickFunction: () => void = this.openMenu.bind(this);


  constructor(private portfolioService: PortfolioService) { }


  openMenu() {
    this.portfolioService.openMenu();
    this.clickFunction = this.closeMenu.bind(this);
    
    setTimeout(() => {
      this.menuIconSrc = 'assets/img/close.png';
    }, 750);
  }


  closeMenu() {
    this.portfolioService.closeMenu();
    this.clickFunction = this.openMenu.bind(this);

    setTimeout(() => {
      this.menuIconSrc = 'assets/img/menuIcon.png';
    }, 250);
  }
}
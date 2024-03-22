import { Component } from '@angular/core';
import { PortfolioService } from '../portfolio.service';
import { ChangeLanguageComponent } from './change-language/change-language.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ChangeLanguageComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(public portfolioService: PortfolioService) { }


  openMenu() {
    this.portfolioService.openMenu();
  }


  closeMenu() {
    this.portfolioService.closeMenu();
  }
}
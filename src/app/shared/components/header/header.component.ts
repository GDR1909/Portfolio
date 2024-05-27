import { Component } from '@angular/core';
import { PortfolioService } from '../../../portfolio.service';
import { ChangeLanguageComponent } from './change-language/change-language.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ChangeLanguageComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  /**
   * Creates an instance of HeaderComponent.
   *
   * @param {PortfolioService} portfolioService - The service used to manage the portfolio.
   */
  constructor(public portfolioService: PortfolioService) { }


  /**
   * Opens the menu.
   */
  openMenu() {
    this.portfolioService.openMenu();
  }


  /**
   * Closes the menu.
   */
  closeMenu() {
    this.portfolioService.closeMenu();
  }
}
import { Component } from '@angular/core';
import { PortfolioService } from '../../../portfolio.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  /**
   * Creates an instance of MenuComponent.
   *
   * @param {PortfolioService} portfolioService - The service used to manage the portfolio.
   * @param {TranslateService} translate - The service used for language translation.
   */
  constructor(private portfolioService: PortfolioService, public translate: TranslateService) { }


  /**
   * Closes the menu.
   */
  closeMenu() {
    this.portfolioService.closeMenu();
  }
}
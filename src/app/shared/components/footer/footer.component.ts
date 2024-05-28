import { Component } from '@angular/core';
import { PortfolioService } from '../../../portfolio.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    TranslateModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  /**
   * Creates an instance of FooterComponent.
   *
   * @param {PortfolioService} portfolioService - The service used to manage the portfolio.
   * @param {TranslateService} translate - The service used for language translation.
   */
  constructor(private portfolioService: PortfolioService, translate: TranslateService) { }
}
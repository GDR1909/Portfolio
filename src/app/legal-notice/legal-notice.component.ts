import { Component } from '@angular/core';
import { PortfolioService } from '../portfolio.service';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {
  /**
   * Creates an instance of LegalNoticeComponent.
   *
   * @param {PortfolioService} portfolioService - The service used to manage the portfolio.
   */
  constructor(public portfolioService: PortfolioService) { }


  /**
   * Prevents the event from propagating further.
   *
   * @param {MouseEvent} event - The mouse event.
   */
  doNotClose(event: MouseEvent) {
    event.stopPropagation();
  }
}
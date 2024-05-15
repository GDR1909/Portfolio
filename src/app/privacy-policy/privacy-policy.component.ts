import { Component } from '@angular/core';
import { PortfolioService } from '../portfolio.service';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {
  /**
   * Creates an instance of PrivacyPolicyComponent.
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
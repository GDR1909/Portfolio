import { Component } from '@angular/core';
import { PortfolioService } from '../portfolio.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  constructor(private portfolioService: PortfolioService, translate: TranslateService) { }


  openLegalNotice() {
    this.portfolioService.openLegalNotice();
  }
}
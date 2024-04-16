import { Component } from '@angular/core';
import { PortfolioService } from '../portfolio.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  constructor(private portfolioService: PortfolioService, public translate: TranslateService) { }


  closeMenu() {
    this.portfolioService.closeMenu();
  }
}
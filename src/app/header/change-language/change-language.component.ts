import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { PortfolioService } from '../../portfolio.service';

@Component({
  selector: 'app-change-language',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './change-language.component.html',
  styleUrl: './change-language.component.scss'
})
export class ChangeLanguageComponent {
  selectedLanguage: string = 'ENG';
  languages = ['ENG', 'DEU', 'ITA'];

  
  constructor(public translate: TranslateService, public portfolioService: PortfolioService) { }


  selectLanguage(language: string) {
    this.selectedLanguage = language;
    this.translate.use(this.selectedLanguage.toLocaleLowerCase());
    this.portfolioService.closeDropdown();
  }
}
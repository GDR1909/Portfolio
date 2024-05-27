import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { PortfolioService } from '../../../../portfolio.service';

@Component({
  selector: 'app-change-language',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './change-language.component.html',
  styleUrl: './change-language.component.scss'
})
export class ChangeLanguageComponent {
  /** The currently selected language. */
  selectedLanguage: string = 'ENG';

  /** List of available languages. */
  languages = ['ENG', 'DEU', 'ITA'];

  
  /**
   * Creates an instance of ChangeLanguageComponent.
   *
   * @param {TranslateService} translate - The service used for language translation.
   * @param {PortfolioService} portfolioService - The service used to manage the portfolio.
   */
  constructor(public translate: TranslateService, public portfolioService: PortfolioService) { }


  /**
   * Sets the selected language and updates the translation service.
   *
   * @param {string} language - The language to select.
   */
  selectLanguage(language: string) {
    this.selectedLanguage = language;
    this.translate.use(this.selectedLanguage.toLocaleLowerCase());
    this.portfolioService.closeDropdown();
  }
}
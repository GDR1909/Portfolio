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
  changeLanguageDropdownMenuIsOpen = false;
  selectedLanguage: string = 'ENG';
  languages = ['ENG', 'DEU', 'ITA'];
  clickFunctionChangeLanguageDropdown: () => void = this.openDropdown.bind(this);

  constructor(public translate: TranslateService, private portfolioService: PortfolioService) { }


  openDropdown() {
    if (!this.changeLanguageDropdownMenuIsOpen) {
      this.clickFunctionChangeLanguageDropdown = this.closeDropdown.bind(this);
      document.getElementById('changeLanguageBtn')!.style.border = 'solid 2px black';
      document.getElementById('changeLanguageBtn')!.style.borderBottom = 'none';
      document.getElementById('languageList')!.style.display = 'flex';
      this.changeLanguageDropdownMenuIsOpen = true;
      console.log(this.changeLanguageDropdownMenuIsOpen);
    }
  }


  selectLanguage(language: string) {
    this.selectedLanguage = language;
    this.translate.use(this.selectedLanguage.toLocaleLowerCase());
    this.closeDropdown();
  }


  closeDropdown() {
    if (this.changeLanguageDropdownMenuIsOpen) {
      this.clickFunctionChangeLanguageDropdown = this.openDropdown.bind(this);
      document.getElementById('languageList')!.style.display = 'none';
      document.getElementById('changeLanguageBtn')!.style.border = 'solid 2px black';
      this.changeLanguageDropdownMenuIsOpen = false;
      console.log(this.changeLanguageDropdownMenuIsOpen);
    }
  }
}
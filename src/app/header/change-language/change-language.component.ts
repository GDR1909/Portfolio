import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-change-language',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './change-language.component.html',
  styleUrl: './change-language.component.scss'
})
export class ChangeLanguageComponent {
  changeLanguageDropdownMenuIsOpen = false;
  selectedLanguage: string = 'ENG';
  languages = ['ENG', 'DEU', 'ITA'];
  clickFunction: () => void = this.openDropdown.bind(this);


  openDropdown() {
    if (!this.changeLanguageDropdownMenuIsOpen) {
      this.clickFunction = this.closeDropdown.bind(this);
      document.getElementById('changeLanguageBtn')!.style.border = 'solid 2px black';
      document.getElementById('changeLanguageBtn')!.style.borderBottom = 'none';
      document.getElementById('languageList')!.style.display = 'flex';
      this.changeLanguageDropdownMenuIsOpen = true;
      console.log(this.changeLanguageDropdownMenuIsOpen);
    }
  }


  selectLanguage(language: string) {
    this.selectedLanguage = language;
    this.closeDropdown();
  }


  closeDropdown() {
    if (this.changeLanguageDropdownMenuIsOpen) {
      this.clickFunction = this.openDropdown.bind(this);
      document.getElementById('languageList')!.style.display = 'none';
      document.getElementById('changeLanguageBtn')!.style.border = 'solid 2px black';
      this.changeLanguageDropdownMenuIsOpen = false;
      console.log(this.changeLanguageDropdownMenuIsOpen);
    }
  }
}
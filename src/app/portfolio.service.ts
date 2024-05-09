import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  menuIconSrc: string = 'assets/img/menuIcon.png';
  clickFunction: () => void = this.openMenu.bind(this);
  changeLanguageDropdownMenuIsOpen = false;
  clickFunctionChangeLanguageDropdown: () => void = this.openDropdown.bind(this);


  constructor() { }


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


  closeDropdown() {
    if (this.changeLanguageDropdownMenuIsOpen) {
      this.clickFunctionChangeLanguageDropdown = this.openDropdown.bind(this);
      document.getElementById('languageList')!.style.display = 'none';
      document.getElementById('changeLanguageBtn')!.style.border = 'solid 2px black';
      this.changeLanguageDropdownMenuIsOpen = false;
      console.log(this.changeLanguageDropdownMenuIsOpen);
    }
  }


  openMenu() {
    document.getElementById('menu')!.style.transform = 'translateY(0%)';
    document.getElementById('menu')!.style.top = '0%';
    document.getElementById('menu')!.style.transition = 'ease 1s';

    setTimeout(() => {
      this.menuIconSrc = 'assets/img/close.png';
      this.clickFunction = this.closeMenu.bind(this);
      console.log('open menu works!');
    }, 750);
  }


  closeMenu() {
    document.getElementById('menu')!.style.transform = 'translateY(-100%)';
    document.getElementById('menu')!.style.top = '-100%';
    document.getElementById('menu')!.style.transition = 'ease 1s';

    setTimeout(() => {
      this.menuIconSrc = 'assets/img/menuIcon.png';
      this.clickFunction = this.openMenu.bind(this);
      console.log('close menu works!');
    }, 250);
  }


  openPrivacyPolicy() {
    document.getElementById('privacyPolicy')!.style.display = 'flex';
  }


  openLegalNotice() {
    document.getElementById('legalNotice')!.style.display = 'flex';
  }


  showSentMessagePopUp() {
    document.getElementById('sentMessage')!.style.display = 'flex';

    setTimeout(() => {
      document.getElementById('sentMessage')!.style.display = 'none';
    }, 6000);
  }
}
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


  /**
   * Opens the change language dropdown menu.
   */
  openDropdown() {
    if (!this.changeLanguageDropdownMenuIsOpen) {
      this.clickFunctionChangeLanguageDropdown = this.closeDropdown.bind(this);
      document.getElementById('changeLanguageBtn')!.style.border = 'solid 2px black';
      document.getElementById('changeLanguageBtn')!.style.borderBottom = 'none';
      document.getElementById('languageList')!.style.display = 'flex';
      this.changeLanguageDropdownMenuIsOpen = true;
    }
  }


  /**
    * Closes the change language dropdown menu.
    */
  closeDropdown() {
    if (this.changeLanguageDropdownMenuIsOpen) {
      this.clickFunctionChangeLanguageDropdown = this.openDropdown.bind(this);
      document.getElementById('languageList')!.style.display = 'none';
      document.getElementById('changeLanguageBtn')!.style.border = 'solid 2px black';
      this.changeLanguageDropdownMenuIsOpen = false;
    }
  }


  /**
   * Opens the menu.
   */
  openMenu() {
    document.getElementById('menu')!.style.transform = 'translateY(0%)';
    document.getElementById('menu')!.style.top = '0%';
    document.getElementById('menu')!.style.transition = 'ease 1s';

    setTimeout(() => {
      this.menuIconSrc = 'assets/img/close.png';
      this.clickFunction = this.closeMenu.bind(this);
    }, 750);
  }


  /**
   * Closes the menu.
   */
  closeMenu() {
    document.getElementById('menu')!.style.transform = 'translateY(-100%)';
    document.getElementById('menu')!.style.top = '-100%';
    document.getElementById('menu')!.style.transition = 'ease 1s';

    setTimeout(() => {
      this.menuIconSrc = 'assets/img/menuIcon.png';
      this.clickFunction = this.openMenu.bind(this);
    }, 250);
  }


  /**
   * Displays a popup indicating that a message has been sent.
   * The popup will automatically disappear after 6 seconds.
   */
  showSentMessagePopUp() {
    document.getElementById('sentMessage')!.style.display = 'flex';

    setTimeout(() => {
      document.getElementById('sentMessage')!.style.display = 'none';
    }, 6000);
  }
}
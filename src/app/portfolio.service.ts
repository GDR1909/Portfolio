import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  menuIconSrc: string = 'assets/img/menuIcon.png';
  clickFunction: () => void = this.openMenu.bind(this);


  constructor() { }


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
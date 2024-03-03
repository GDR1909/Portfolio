import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  constructor() { }

  openMenu() {
    document.getElementById('menu')!.style.transform = 'translateY(0%)';
    document.getElementById('menu')!.style.top = '0%';
    document.getElementById('menu')!.style.transition = 'ease 1s';
    console.log('works!');
  }
}
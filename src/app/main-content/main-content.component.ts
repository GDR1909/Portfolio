import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PortfolioService } from '../portfolio.service';
import { LandingPageComponent } from './landingPage/landingPage.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ArrowRightComponent } from './arrow-right/arrow-right.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { ArrowLeftComponent } from './arrow-left/arrow-left.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { SentMessageComponent } from './sent-message/sent-message.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    CommonModule,
    LandingPageComponent,
    AboutMeComponent,
    ArrowRightComponent,
    MySkillsComponent,
    ArrowLeftComponent,
    PortfolioComponent,
    ContactComponent,
    SentMessageComponent
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {
  constructor(public portfolioService: PortfolioService) { }


  closeDropdown() {
    this.portfolioService.closeDropdown();
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LandingPageComponent } from './landingPage/landingPage.component';
import { HeaderComponent } from './header/header.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ArrowRightComponent } from './arrow-right/arrow-right.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { ArrowLeftComponent } from './arrow-left/arrow-left.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    LandingPageComponent,
    HeaderComponent,
    AboutMeComponent,
    ArrowRightComponent,
    MySkillsComponent,
    ArrowLeftComponent,
    PortfolioComponent,
    ContactComponent,
    FooterComponent,
    MenuComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
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
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { PortfolioService } from './portfolio.service';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';


export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}

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
    MenuComponent,
    PrivacyPolicyComponent,
    LegalNoticeComponent,
    TranslateModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';


  constructor(private portfolioService: PortfolioService) { }


  closePopUp(id: string) {
    document.getElementById(id)!.style.display = 'none';
  }
}
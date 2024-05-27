import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PortfolioService } from './portfolio.service';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { MainContentComponent } from './main-content/main-content.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { MenuComponent } from './shared/components/menu/menu.component';


/**
 * Factory function for creating an instance of TranslateHttpLoader.
 *
 * @param {HttpClient} httpClient - The HTTP client used to load translation files.
 * @returns {TranslateHttpLoader} A TranslateHttpLoader instance.
 */
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MainContentComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    PrivacyPolicyComponent,
    LegalNoticeComponent,
    TranslateModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  /** The title of the application. */
  title = 'portfolio';


  /**
   * Creates an instance of AppComponent.
   *
   * @param {PortfolioService} portfolioService - The service used to manage the portfolio.
   */
  constructor(public portfolioService: PortfolioService) { }


  /**
   * Closes the dropdown menu by calling the corresponding method in PortfolioService.
   */
  closeDropdown() {
    this.portfolioService.closeDropdown();
  }
}
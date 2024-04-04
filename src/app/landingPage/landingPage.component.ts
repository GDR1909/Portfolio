import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-landingPage',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './landingPage.component.html',
  styleUrl: './landingPage.component.scss'
})
export class LandingPageComponent {
  constructor(public translate: TranslateService) { }
}
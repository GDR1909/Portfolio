import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  /**
   * Creates an instance of AboutMeComponent.
   *
   * @param {TranslateService} translate - The service used for language translation.
   */
  constructor(public translate: TranslateService) { }
}
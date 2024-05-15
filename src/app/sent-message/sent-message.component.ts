import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-sent-message',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './sent-message.component.html',
  styleUrl: './sent-message.component.scss'
})
export class SentMessageComponent {
  /**
   * Creates an instance of SentMessageComponent.
   *
   * @param {TranslateService} translate - The service used for language translation.
   */
  constructor(public translate: TranslateService) { }
}
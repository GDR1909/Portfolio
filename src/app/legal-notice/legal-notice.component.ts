import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent implements OnInit {
  /**
   * Creates an instance of LegalNoticeComponent.
   * 
   * @param {Router} router - The Angular Router service.
   * @param {TranslateService} translate - The service used for language translation.
   */
  constructor(private router: Router, public translate: TranslateService) { }


  /**
   * Angular lifecycle hook that is called after the component has been initialized.
   * Navigates to the '/legal-notice' route and scrolls the window to the top.
   */
  ngOnInit() {
    this.router.navigateByUrl('/legal-notice').then(() => {
      window.scrollTo(0, 0);
    });
  }
}
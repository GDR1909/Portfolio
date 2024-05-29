import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent implements OnInit {
  /**
   * Creates an instance of PrivacyPolicyComponent.
   * 
   * @param {Router} router - The Angular Router service.
   * @param {TranslateService} translate - The service used for language translation.
   */
  constructor(private router: Router, public translate: TranslateService) { }


  /**
   * Angular lifecycle hook that is called after the component has been initialized.
   * Navigates to the '/privacy-policy' route and scrolls the window to the top.
   */
  ngOnInit() {
    this.router.navigateByUrl('/privacy-policy').then(() => {
      window.scrollTo(0, 0);
    });
  }
}
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent implements OnInit {
  /**
   * Creates an instance of PrivacyPolicyComponent.
   * 
   * @param {Router} router - The Angular Router service.
   */
  constructor(private router: Router) { }


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
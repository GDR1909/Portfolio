import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { PortfolioService } from '../../portfolio.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule, TranslateModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  http = inject(HttpClient);

  contactData = {
    name: '',
    email: '',
    message: '',
    privacyPolicy: false
  }

  mailTest = false;

  post = {
    endPoint: 'https://davide-religioso.com/sendMail.php',  // 'https://deineDomain.de/sendMail.php'
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };


  constructor(private portfolioService: PortfolioService, translate: TranslateService) { }


  privacyPolicyAccepted(event: any) {
    const isChecked = event.target.checked;
    this.contactData.privacyPolicy = isChecked;
    console.log(this.contactData.privacyPolicy);
  }

  
  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            this.portfolioService.showSentMessagePopUp();
            // optionial code can be added here
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

      ngForm.resetForm();
    }
  }


  openPrivacyPolicy() {
    this.portfolioService.openPrivacyPolicy();
  }
}
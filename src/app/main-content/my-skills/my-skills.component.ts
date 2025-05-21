import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { fadeIn } from '../../shared/animations';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  animations: [fadeIn],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {
  /**
   * Creates an instance of MySkillsComponent.
   *
   * @param {TranslateService} translate - The service used for language translation.
   */
  constructor(public translate: TranslateService) { }


  popupOpen: boolean = false;


  /** List of skills with their icons and names. */
  skills = [
    {
      'icon': 'assets/skillIcons/angular.png',
      'name': 'Angular'
    },
    {
      'icon': 'assets/skillIcons/typescript.png',
      'name': 'TypeScript'
    },
    {
      'icon': 'assets/skillIcons/javascript.png',
      'name': 'JavaScript'
    },
    {
      'icon': 'assets/skillIcons/html.png',
      'name': 'HTML'
    },
    {
      'icon': 'assets/skillIcons/css.png',
      'name': 'CSS'
    },
    {
      'icon': 'assets/skillIcons/firebase.png',
      'name': 'Firebase'
    },
    {
      'icon': 'assets/skillIcons/git.png',
      'name': 'Git'
    },
    {
      'icon': 'assets/skillIcons/scrum.png',
      'name': 'Scrum'
    },
    {
      'icon': 'assets/skillIcons/api.png',
      'name': 'Rest-API'
    },
    {
      'icon': 'assets/skillIcons/materialDesign.png',
      'name': 'Material Design'
    },
    {
      'icon': 'assets/skillIcons/scss.png',
      'name': 'SCSS'
    },
    // {
    //   'icon': 'assets/skillIcons/wordpress.png',
    //   'name': 'WordPress'
    // }
  ];


  /**
   * Opens the popup.
   */
  showPopup() {
    this.popupOpen = true;
  }

  
  /**
   * Closes the popup.
   */
  closePopup() {
    this.popupOpen = false;
  }
}
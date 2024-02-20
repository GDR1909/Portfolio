import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {
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
    {
      'icon': 'assets/skillIcons/wordpress.png',
      'name': 'WordPress'
    }
  ];
}

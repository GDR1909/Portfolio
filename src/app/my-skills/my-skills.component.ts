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
  iconFullPath = 'assets/skillIcons/';

  iconSinglePath = [
    'angular.png',
    'typescript.png',
    'javascript.png',
    'html.png',
    'css.png',
    'firebase.png',
    'git.png',
    'scrum.png',
    'api.png',
    'materialDesign.png',
    'scss.png',
    'wordpress.png'
  ];

  iconName = [
    'Angular',
    'TypeScript',
    'JavaScript',
    'HTML',
    'CSS',
    'Firebase',
    'Git',
    'Scrum',
    'Rest-API',
    'Material Design',
    'SCSS',
    'WordPress'
  ];
}

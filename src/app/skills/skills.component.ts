import { Component, OnInit } from '@angular/core';
import { Skill } from '../models/models';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [
    {
      name: 'JavaScript',
      level: 'Expert',
      rating: 85,
    },
    {
      name: 'C Sharp',
      level: 'Intermidiate',
      rating: 70,
    },
    {
      name: 'ASP.NET Core',
      level: 'Intermidiate',
      rating: 70,
    },
    {
      name: 'Angular',
      level: 'Intermediate',
      rating: 80,
    },
    {
      name: 'HTML, CSS',
      level: 'Expert',
      rating: 90,
    },

    {
      name: 'Selenium Webdriver, Postman',
      level: 'Intermidiate',
      rating: 70,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}

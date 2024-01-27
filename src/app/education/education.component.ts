import { Component, OnInit } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  educationList: Education[] = [
    {
      institute: 'American University of Afghanistan',
      course: 'Bachelor of Information Technology',
      duration: '2018-2022',
      score: '85%',
    },
    {
      institute: 'Humber College',
      course: 'Full Stack .NET Cloud Developer',
      duration: '2022-2023',
      score: '90%',
    },
    {
      institute: 'Udemy',
      course: 'Learn Firebase Core with React',
      duration: '2023',
      score: '100%',
    },
    {
      institute: 'Udemy',
      course: 'The Complete 2023 Software Testing Bootcamp',
      duration: '2023',
      score: '100%',
    },
    {
      institute: 'Coursera',
      course: 'Data Analysis with Python',
      duration: '2022',
      score: '100%',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

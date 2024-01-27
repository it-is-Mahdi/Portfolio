import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css'],
})
export class PersonalInformationComponent implements OnInit {
  myData: string[][] = [
    ['Name', 'Mahdi Alizada'],
    ['DOB', 'Sep 01, 2000'],
    ['Work Exp', '2 Years'],
    ['Education', "Bachelor's degree"],
    ['Interests', 'Coding, Soccer'],
  ];

  aboutMe: string[] = [
    'Highly motivated and detail-oriented Software Developer with strong foundation',
    'in programming languages such as Python, C#, and JavaScript. Adaptable and',
    'flexible with proven ability to collaborate with senior developers and',
    'stakeholders to design and develop software solutions, ensuring adherence to',
    'project specifications and industry best practices. Adept at writing and testing',
    'code, participating in code reviews, and resolving software defects.',
  ];

  constructor() {}

  ngOnInit(): void {}
}

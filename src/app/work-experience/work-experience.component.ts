import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../models/models';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css'],
})
export class WorkExperienceComponent implements OnInit {
  workExpList: WorkExperience[] = [
    {
      role: 'Software Developer in Test',
      company: 'Faraso Technology',
      duration: 'Dec 2019 - Apr 2021',
      description: [
        'Successfully created and executed test cases and test plans based on project requirements and design specifications, ensuring comprehensive coverage of software functionality.',
        'Implemented a robust test automation framework that resulted in a 30% reduction in manual testing efforts and significantly accelerated the release cycle.',
      ],
    },
    {
      role: 'Software Developer Intern',
      company: 'Faraso Technology',
      duration: 'Jul 2019 - Dec 2019',
      description: [
        'Collaborated with senior developers and stakeholders to gain a deep understanding of project requirements, contributing to the design and development of software and web solutions using Python, JavaScript, HTML and CSS. ',
        'Developed a responsive and user-friendly bookstore landing page, leading to a 15% increase in user engagement and a 20% improvement in conversion rates.',
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}

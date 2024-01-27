import { Component, OnInit } from '@angular/core';
import { Project } from '../models/models';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'Career Cloud',
      technologies: 'C#, MVC, MS SQL Server, ADO.NET, Entity Framework',
      description: [
        'Developing a job search portal that unites job seekers and recruiters on a single platform.',
        'Designing and developing the POCOs (Plain Old CLR Objects) layer of the project and data classes using C#.',
        'Establishing interfaces and classes in the repository layer, each employing ADO.Net to execute CRUD .',
      ],
    },
    {
      title: 'Recipe App with React',
      technologies: 'React, Firebase, JavaScript, VS Code',
      description: [
        'Created a recipe website.',
        'Deployed it using Github action and firebase.',
        'Implemented CRUD operationss.',
      ],
    },
    {
      title: 'Personal Portfolio',
      technologies: 'Angular, HTML, CSS, JS',
      description: [
        'Created a responsive personal portfolio website.',
        'Used angular 13.3.0.',
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

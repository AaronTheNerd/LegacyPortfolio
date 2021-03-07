import { Component, OnInit } from '@angular/core';
import { PERSONAL_PROJECTS, REQUIRED_PROJECTS, OPTIONAL_PROJECTS } from '../my-projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  personal_projects = PERSONAL_PROJECTS;
  required_projects = REQUIRED_PROJECTS;
  optional_projects = OPTIONAL_PROJECTS;

  constructor() { }

  ngOnInit() {
  }
}
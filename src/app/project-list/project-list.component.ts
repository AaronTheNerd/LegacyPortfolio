import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/project'

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  @Input() project_list: Project[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}

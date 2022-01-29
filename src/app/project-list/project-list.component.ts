import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/project'
import { highlight } from '../highlight'


@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  @Input() project_list: Project[] = [];
  constructor() { }
  highlighttext(text: string) {
    return highlight(text);
  }
  ngOnInit(): void {
  }
  send_event(project: Project): void {
    window['gtag']('event', project.title);
  }
}

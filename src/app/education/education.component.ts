import { Component, OnInit } from '@angular/core';
import { COURSES } from '../my-courses';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  courses = COURSES;
  constructor() { }

  ngOnInit(): void {
  }

}

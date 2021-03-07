import { Component, OnInit } from '@angular/core';
import { WORKS } from '../my-work';

@Component({
  selector: 'app-work-experiences',
  templateUrl: './work-experiences.component.html',
  styleUrls: ['./work-experiences.component.css']
})
export class WorkExperiencesComponent implements OnInit {
  works = WORKS;
  constructor() { }

  ngOnInit(): void {
  }

}

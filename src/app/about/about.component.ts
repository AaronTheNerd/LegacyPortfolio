import { Component, OnInit } from '@angular/core';
import { LANGUAGES } from '../my-languages';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  languages = LANGUAGES;

  constructor() { }

  ngOnInit(): void {
  }

}

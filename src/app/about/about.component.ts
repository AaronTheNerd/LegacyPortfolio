import { Component, OnInit } from '@angular/core';
import { LANGUAGES } from '../my-languages';
import { highlight } from '../highlight';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  languages = LANGUAGES;
  content = ""
  constructor() {
    this.content = `I've made this website to act as a virtual portfolio which has my education, work, and project
    experiences within it. This is my third attempt at making a "good-looking" website by hand. This project was made using Angular
    for the sake of simplifying the addition of more information as it happens. The source code can
    be found on Github.`
  }

  public highlight() {
    return highlight(this.content)
  }

  ngOnInit(): void {
  }

}

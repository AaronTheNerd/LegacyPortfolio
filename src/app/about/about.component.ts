import { Component, OnInit } from '@angular/core';
import { highlight } from '../highlight';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  content = ""
  constructor() {}

  public highlight() {
    return highlight(this.content)
  }

  ngOnInit(): void {
  }

}

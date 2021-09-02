import { Component, OnInit } from '@angular/core';
import { highlight } from '../highlight';
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  twitterIcon = faTwitter;
  stackOverflowIcon = faStackOverflow;
  linkedInIcon = faLinkedin;
  githubIcon = faGithub;
  emailIcon = faEnvelope;
  content = ""
  constructor() {}

  public highlight() {
    return highlight(this.content)
  }

  ngOnInit(): void {
  }

}

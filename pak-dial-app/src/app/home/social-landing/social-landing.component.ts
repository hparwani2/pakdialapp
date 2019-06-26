import { Component, OnInit } from '@angular/core';
import { CommonFunctionService } from 'src/app/services/common-function.service';

@Component({
  selector: 'app-social-landing',
  templateUrl: './social-landing.component.html',
  styleUrls: ['./social-landing.component.css']
})
export class SocialLandingComponent implements OnInit {

  constructor(public common: CommonFunctionService) { }

  ngOnInit() {
  }

}

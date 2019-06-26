import { Component, OnInit } from '@angular/core';
import { CommonFunctionService } from 'src/app/services/common-function.service';

@Component({
  selector: 'app-privacy-setting',
  templateUrl: './privacy-setting.component.html',
  styleUrls: ['./privacy-setting.component.css']
})
export class PrivacySettingComponent implements OnInit {

  constructor(public common:CommonFunctionService) { }

  ngOnInit() {
  }

}

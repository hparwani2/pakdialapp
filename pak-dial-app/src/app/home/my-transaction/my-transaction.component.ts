import { Component, OnInit } from '@angular/core';
import { CommonFunctionService } from 'src/app/services/common-function.service';

@Component({
  selector: 'app-my-transaction',
  templateUrl: './my-transaction.component.html',
  styleUrls: ['./my-transaction.component.css']
})
export class MyTransactionComponent implements OnInit {

  constructor(public common:CommonFunctionService) { }

  ngOnInit() {
  }

}

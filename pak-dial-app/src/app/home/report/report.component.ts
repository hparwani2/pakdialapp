import { Component, OnInit } from '@angular/core';
import { AlertService } from 'ngx-alerts';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { CommonFunctionService } from 'src/app/services/common-function.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  constructor(public common:CommonFunctionService,public location: Location,public routeAc: ActivatedRoute,private http:HttpClient,private alert:AlertService,private route:Router) { }
  formData= new Data();
  ngOnInit() {
    this.formData.phone = this.formData.address = this.formData.place = false
    this.formData.user_id = parseInt(JSON.parse(localStorage.getItem('user_data'))['user'].user_id)
    this.routeAc.params.subscribe(params => {
      if(params['id']) {
        this.formData.listing_id = params['id']
      }});
  }
  report(){
    var data = this.formData
    this.http.post('http://pakdial.com/api/Listing/report_issue',data).subscribe(data=>{
     if(data['status'] == 1){
      //  success msg toaster
      this.location.back();
     }
    },error=>{

    }
    )
  }
}


export class Data {
listing_id:number
user_id:number
phone:boolean
address:boolean
place:boolean
text:string
}
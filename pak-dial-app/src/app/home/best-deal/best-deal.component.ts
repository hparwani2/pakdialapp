import { Component, OnInit } from '@angular/core';
import { CommonFunctionService } from 'src/app/services/common-function.service';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';

@Component({
  selector: 'app-best-deal',
  templateUrl: './best-deal.component.html',
  styleUrls: ['./best-deal.component.css']
})
export class BestDealComponent implements OnInit {
  name:string
  sForm = new Data;
  responces:any;
  constructor(public common:CommonFunctionService,
    public data:DataService,
    private route: ActivatedRoute,
    public http: HttpClient,
    public toastr: ToastrService,
    public location: Location
    ) { }

  ngOnInit() {
    this.sForm.city_id = 0
    this.sForm.cat_id = 0
    this.sForm.listid = parseInt(
      JSON.parse(localStorage.getItem("listingId"))
    );
    this.sForm.name = this.sForm.message = this.sForm.phone = ''
  this.http.post('http://pakdial.com/api/Listing/view',{listing_id : JSON.parse(localStorage.getItem('listingId'))}).subscribe((data)=>{
this.responces = data
if(this.responces['listing'] != null)
console.log(this.responces['listing']['company_name'])
});
  }

  saveDeal(){
    if(this.sForm.name == '' ||
      this.sForm.phone == '' ||
      this.sForm.mobile == null){
        this.toastr.error('Invalid', 'Fill all Mandatory Fields')
      }else{
        this.http.post("http://pakdial.com/api/Listing/ajax_add_enquiry", this.sForm).subscribe(data => {
          console.log(data)
          if (data['status'] == 1) {
            this.toastr.success("Success", "Succefully Rating ");
            this.location.back();
          }
        },
        error => {
          this.toastr.error("Error", "Internal error");
        });
      }
  
  }

}

export class Data {
  // listing_id:number
  name:string;
  phone:string;
  mobile:number;
  email_id:string;
  email:string;
  message:string
  listid:number
  city_id:number
  cat_id:number
}

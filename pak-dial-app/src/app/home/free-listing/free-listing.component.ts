import { Component, OnInit } from '@angular/core';
import { CommonFunctionService } from 'src/app/services/common-function.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';

@Component({
  selector: 'app-free-listing',
  templateUrl: './free-listing.component.html',
  styleUrls: ['./free-listing.component.css']
})
export class FreeListingComponent implements OnInit {
  constructor(
    private toastr: ToastrService,
    public router: Router,
    public http: HttpClient,
    public common: CommonFunctionService,
    public location:Location
  ) {}
  free = new Data();
  cities: any;
  ngOnInit() {
    let cate;
    cate = this.http.get("http://pakdial.com/api/Search/cities");
    cate.subscribe(d => (this.cities = d));
    var user = JSON.parse(localStorage.getItem("user_data"));
    debugger;
    if (user == null) {
      // this.loginStatus = false;
      // this.router.navigateByUrl('login')
    } else {
      // this.data = user['user']
      // this.loginStatus = true;
    }
    this.free.fname = this.free.lname = this.free.mobile = this.free.email = this.free.lnum = this.free.city_name = this.free.website = this.free.m_num = this.free.l_num = this.free.std_code =
      "";
    this.free.city_id = 0;
  }
  saveData() {
    debugger;
    if (
      this.free.cname == "" ||
      this.free.fname == "" ||
      this.free.lname == "" ||
      this.free.mobile == "" ||
      this.free.email == '' ||
      this.free.lnum == '' ||
      this.free.website == '' ||
      this.free.m_num == ''||
      this.free.l_num == ''||
      this.free.std_code == ''||
      this.free.service == ''
    ) {
      // this.alert.danger('please fill the mandatory details');
      this.toastr.error("Invalid", "please fill the mandatory details");
    } else {
      this.free.userid = parseInt(
        JSON.parse(localStorage.getItem("user_data"))["user"].user_id
      );

      this.http
        .post("http://pakdial.com/api/Listing/add_listing_data", this.free)
        .subscribe(data => {
          console.log(data);
          this.toastr.success("Success", "Free Listing Data Added Succefully");
          setTimeout(() => {
            this.location.back();
          }, 2000);
        });
    }
  }
}

export class Data {
  cname: string;
  fname: string;
  lname: string;
  mobile: string;
  email: string;
  lnum: string;
  website: string;
  selected: string;
  m_num: string;
  l_num: string;
  std_code: string;
  service: string;
  userid: number;
  city_name: string;
  city_id: number;
}

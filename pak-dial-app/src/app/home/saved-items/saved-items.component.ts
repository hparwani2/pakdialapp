import { Component, OnInit } from "@angular/core";
import { CommonFunctionService } from "src/app/services/common-function.service";
import { HttpClient } from "@angular/common/http";
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: "app-saved-items",
  templateUrl: "./saved-items.component.html",
  styleUrls: ["./saved-items.component.css"]
})
export class SavedItemsComponent implements OnInit {
  responces: any;
  constructor(public router:Router,public toaster:ToastrService,public common: CommonFunctionService, public http: HttpClient) {}

  ngOnInit() {

    var user = JSON.parse(localStorage.getItem('user_data'));
    debugger
    if(user == null){
      // this.loginStatus = false;
      this.router.navigateByUrl('login')
    }else{
      var user_id = parseInt(
        JSON.parse(localStorage.getItem("user_data"))["user"].user_id
      );   
      //  this.loginStatus = true;

      this.http
      .post("http://pakdial.com/api/Listing/saved_items", { userid: user_id })
      .subscribe(
        data => {
          this.responces = data;
        },
        error => {
          this.toaster.error('Error','Internal Server Error')
        }
      );
    }
    

    
  }
}

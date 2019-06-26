import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonFunctionService } from 'src/app/services/common-function.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {
  responces:any;
  constructor(public router: Router,public common: CommonFunctionService,public http: HttpClient) { }

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




    this.http.post('http://pakdial.com/api/Listing/user_favorites',{userId:user_id}).subscribe(data=>{
   this.responces = data
    })
  }
  }
}

import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  loginStatus:boolean = false
  data:any;
  constructor(private location: Location,
    public router: Router) { }

  ngOnInit() {
    var user = JSON.parse(localStorage.getItem('user_data'));
    debugger
    if(user == null){
      this.loginStatus = false;
      this.router.navigateByUrl('login')
    }else{
    this.data = user['user']
    this.loginStatus = true;

    
    }
  }

  back(){
    this.location.back()
  }
}

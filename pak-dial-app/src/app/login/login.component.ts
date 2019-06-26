import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SharedataService } from '../sharedata.service';
import { AuthenticationService, TokenPayload } from '../authetication.service';
import { AlertService } from 'ngx-alerts';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials: TokenPayload = {
    phone: '',
    name :'',
    email : ''
  };
  
  constructor(private toastr: ToastrService,private router: Router, private http: HttpClient ,private share:SharedataService,private alert:AlertService,private _location:Location) { }
  res : any;
  ngOnInit() {
    
  }
  login() {
    let x;
    
    if(this.credentials.name == '' || this.credentials.email == '' || this.credentials.phone=='')
    {
      this.toastr.info('Invalid', 'Enter Username/Password');
    }
    else
    {
      // login(this.credentials)
      this.http.post('http://pakdial.com/api/Auth/login',this.credentials).subscribe((data)=>{
      x = data;
      debugger
      localStorage.setItem('user_data', JSON.stringify(data))  
      this.toastr.success('Invalid', 'Login Success');

    },(error)=>{
      this.toastr.error('SERVER ERROR', 'Login Eroor');
    },
    ()=>{
      this.share.setData("user",x);
      this._location.back();
    });
  } 
  }

}
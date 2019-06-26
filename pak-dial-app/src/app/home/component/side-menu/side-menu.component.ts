import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  constructor(public router:Router) { }
  data:any
  loginStatus:boolean = false;
  ngOnInit() {
    var user = JSON.parse(localStorage.getItem('user_data'));
    debugger
    if(user == null){
      this.loginStatus = false;
      // this.router.navigateByUrl('login')
    }else{
    this.data = user['user']
    this.loginStatus = true;

    
    }
  }

  logout(){
    localStorage.clear();
    this.router.navigateByUrl('login')
  }


  pageChange(str){
    switch(str) { 
      case 'favourites': { 
         //statements; 
         this.router.navigateByUrl('favourites')
         break; 
      } 
      case 'savedItems': { 
         //statements; 
        this.router.navigateByUrl('saved-items')

         break; 
      } 
      case 'myTransaction': { 
        //statements; 
       this.router.navigateByUrl('my-transaction')

        break; 
     } 
      case 'advertise': { 
        //statements; 
        this.router.navigateByUrl('advertise')
        break; 
     } 
     case 'aboutUs': { 
        //statements;
        this.router.navigateByUrl('about-us')
 
        break; 
     } 
     case 'helpSupport': { 
      //statements; 
      this.router.navigateByUrl('help-support')
      break; 
   } 
   case 'privacySetting': { 
      //statements; 
      this.router.navigateByUrl('privacy-setting')

      break; 
   } 
  //  free-listing
  case 'freeListing': { 
    //statements; 
    this.router.navigateByUrl('free-listing')

    break; 
 } 
      default: { 
         //statements; 
         break; 
      } 
   }
  }


}

import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class CommonFunctionService {

  constructor(
    public location: Location,
    public router: Router
    ) { }

  clickableFunction(str){
    switch(str) { 
      case 'back': { 
         //statements; 
         this.location.back()
         break; 
      } 
      case 'openMenu': { 
         //statements; 
         break; 
      }
      case 'notification': { 
        //statements;
        this.router.navigateByUrl('notification')
        break; 
     }  
      default: { 
         //statements; 
         break; 
      } 
   } 
  }
}

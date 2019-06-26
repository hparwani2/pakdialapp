import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public route: Router) { }

  ngOnInit() {
  }
  changeRoute(str){
    switch(str) { 
      case 'Social': { 
         //statements; 
         this.route.navigateByUrl('social-landing')
         break; 
      } 
      case 'Advertise': { 
         //statements;
         this.route.navigateByUrl('advertise')
 
         break; 
      } 
      case 'freeListing': { 
        //statements; 
        this.route.navigateByUrl('free-listing')

        break; 
     } 
      default: { 
         //statements; 
         break; 
      } 
   } 
  }
}

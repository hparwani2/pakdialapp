import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedDataServiceService } from 'src/app/services/shared-data-service.service';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-state-details',
  templateUrl: './state-details.component.html',
  styleUrls: ['./state-details.component.css']
})
export class StateDetailsComponent implements OnInit {

  responses : any;
  isDisabled : boolean;
  constructor(  private toastr: ToastrService,  private location:Location,    private activeRoute: ActivatedRoute
,    private route: ActivatedRoute, private http: HttpClient ,private router: Router,private share : SharedDataServiceService) { 
      this.route.params.subscribe( params => console.log(params) );
  }

  ngOnInit() {
    let base;
    
    var inc =this.share.getPosition();
    var catid = this.share.getDataByOption(inc);
    this.activeRoute.params.subscribe(params => {
      if(params['id']) {
        base = this.http.get('http://pakdial.com/api/Listing/get_Listing_by_catid_city/'+params['id']);
        base.subscribe((data)=>{this.responses=data;
          console.log(data);
        },
        error=>{
          this.toastr.error('Error !', 'Internal Error !');

        });
      }
  })

   
  }
  ItemClicked(event , data)
  {
      this.share.setData("listingId",data);
      this.router.navigate(['state//details',data]);
    }

    backArrow(){
      this.location.back()
    }

    filterData(){
      
    }

}

import { Component, OnInit } from '@angular/core';
import { SharedDataServiceService } from '../services/shared-data-service.service';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { parse } from 'url';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {
  responses : any;
  constructor(private toastr: ToastrService,private router: Router,private location: Location,private share : SharedDataServiceService,public http: HttpClient) { }

  ngOnInit() {
    let base;
    var inc = this.share.getPosition();
    var id = this.share.getDataByOption(inc);
    var _id = parseInt(window.location.href.split('?cat=')[1])
    debugger
    base = this.http.get('http://pakdial.com/api/Category/get_child_categories_by_parent/'+_id);
    this.share.setPosition();
    base.subscribe((data) => {this.responses=data;
    console.log(data)});
  }

  backArrow(){
    this.location.back()
  }

  ItemClicked(event,response)
  {
    let base;
    base = this.http.get('http://pakdial.com/api/Category/get_child_categories_by_parent/'+response.category_id);
    base.subscribe((data) =>{ 
      debugger
    if(data.sub_cat_list != [])
    {
      var inc = this.share.getPosition();
      this.share.setData(inc,response.category_id);
      localStorage.setItem('id_detail',response.category_id)
      this.router.navigateByUrl('state/state-details/'+response.category_id);
    }
    else
    {
      var inc = this.share.getPosition();
      this.share.setData(inc,response.category_id);
      this.router.navigateByUrl('/location');
    }
  },error=>{
    this.toastr.error('Error', 'Internal Error!');
  });}

}

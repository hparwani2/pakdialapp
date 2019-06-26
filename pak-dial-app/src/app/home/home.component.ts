import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { SharedDataServiceService } from '../services/shared-data-service.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  catData:any;
  searchBar:boolean = false
data:any;
  loginStatus:boolean = false
  constructor(public dataService: DataService,
              private share : SharedDataServiceService,
              public router: Router,
              private toastr: ToastrService) { }

  ngOnInit() {
    var user = JSON.parse(localStorage.getItem('user_data'));
    //debugger
    if(user == null){
      this.loginStatus = false;
      // this.router.navigateByUrl('login')
    }else{
    this.data = user['user']
    this.loginStatus = true;

    
    }

    this.dataService.allCategoryList().subscribe(data=> {
     this.catData = data;
    },error=>{
      this.toastr.error('Error !', 'Internal Error !');
    })
  }

  ItemClicked(event , response,catName)
  {
      var inc = this.share.getPosition();
      this.share.setData(inc,response.category_id);
      this.router.navigateByUrl('/state'+'?cat='+response.category_id);
  }

  openNav(){
    this.router.navigateByUrl('sideMenu');
  }

  searchBarShow(){
    this.searchBar =  true
  }
}

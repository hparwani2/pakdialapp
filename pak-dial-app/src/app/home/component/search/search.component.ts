import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
// import { SharedataService } from '../sharedata.service';
// import { AlertService } from 'ngx-alerts';
import { Location } from '@angular/common';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  responses : any;
  catData:any;
  user : any;
  searchKey:string
  cities : any
  Visibility : boolean;
  Visible : boolean = true;
  username : any = "Sign In";
  email : any;
  name = '';
  fullSearch:boolean = false
  /**
   * Form
   */
  public historyHeading: string = 'Recently selected';
  public placeholder: string = 'Enter the Category Name';
  public keyword = 'name';
  public countriesTemplate = ['software Developing', 'software Testing', 'real estate', 'Hire Anything','Business 2 business','sports','Tv-Shows','Wedding','Jwellery','Loan and credi'];
  constructor(public dataService: DataService,private location: Location,private http: HttpClient ,private router: Router) { }

  ngOnInit() {

    if(window.navigator.geolocation)
    {
        (window.navigator.geolocation.getCurrentPosition((position)=>console.log(position)));
    }
    let base;
    let cate;
    base = this.http.get('http://pakdial.com/api/Category/get_main_category_home');
    base.subscribe((data) => this.responses = data);
    //console.log(this.share.getDataByOption("cred").user_firstname);
    // if(this.share.getDataByOption("user"))
    // {
    //     this.user = this.share.getDataByOption("user");
    //     this.username = this.user.user.user_firstname;
    //     this.email = this.user.user.user_email;
    //     this.Visibility=true;
    //     this.Visible=false;
    // }
    cate = this.http.get('http://pakdial.com/api/Search/cities');
    cate.subscribe((d)=>this.cities=d);
    this.http.post('http://pakdial.com/api/Listing/ajax_search_keyword',{search_keyword : ''}).subscribe((d)=>console.log(d));
    this.dataService.allCategoryList().subscribe(data=> {
      this.catData = data;
     })
          // this.countriesTemplate.push()
  
  
  
  } 
  ItemClicked(event , response)
  {
      // var inc = this.share.getPosition();
      // this.share.setData(inc,response.category_id);
      this.router.navigateByUrl('/realestate');
  }
  signOut(event)
  {
      // this.share.deleteOption("user");
      this.Visibility = false;
      this.user = false;
      this.Visible=true;
      this.username = "Sign In"
      this.email = "";
  }
  savedItems(event)
  {
      // console.log("hello there!");
      // if(this.share.getDataByOption("user"))
      // {
      //   this.http.post('http://pakdial.com/api/Listing/saved_items',{userid : this.share.getDataByOption("user").user.user_id}).subscribe((d)=>console.log(d));
      // }
      // else
      // {
      //   this.alert.warning('please login!');
      // }
  }
  aboutclicked(event)
  {
    this.router.navigateByUrl('/about');
  }
  helpclicked(event)
  {
    this.router.navigateByUrl('/help');
  }
  listclicked(event)
  {
    this.router.navigateByUrl('/freelisting1');
  }
  openDiv(){
    // this.fullSearch = true ;
    this.router.navigateByUrl('/search')
  }
  cancel(){
    this.location.back()
  }

  searchItem(i){
    this.dataService.allCategoryList().subscribe(data=> {
      this.catData = data;
     })
    debugger
  
  }
  backArray(){
    this.location.back();
  }
}
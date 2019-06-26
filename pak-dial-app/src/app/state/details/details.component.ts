import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router, ActivatedRoute } from "@angular/router";
import { AlertService } from "ngx-alerts";
import { Location } from "@angular/common";
import { SharedDataServiceService } from "src/app/services/shared-data-service.service";
import { StoreRating } from "src/app/services/authetication.service";
import { SlidesOutputData } from "ngx-owl-carousel-o";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-detailpage",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.css"]
})
export class DetailsComponent implements OnInit {
  responses: any;
  data: any;
  rateValue: number;
  listingId: number;
  url: string;
  AVG_RATING: any = 2.5;
  Visibility: boolean;
  isDisabled: boolean;
  menuShow: boolean = false;
  loginStatus: boolean = false;
  percentage: number;
  credentials: StoreRating = {
    rating_val: ""
  };
  avg:string;
  title:string;
reviews: any;
  constructor(
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    private share: SharedDataServiceService,
    private _location: Location
  ) {}
  customOptions: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ["", ""],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  };

  activeSlides: SlidesOutputData;

  slidesStore: any[];

  getPassedData(data: SlidesOutputData) {
    this.activeSlides = data;
    console.log(this.activeSlides);
  }
  ngOnInit() {
    this.url = window.location.href;
    var user = JSON.parse(localStorage.getItem("user_data"));
// window.location.reload()
    if (user == null) {
      this.loginStatus = false;
      // this.router.navigateByUrl('login')
    } else {
      this.data = user["user"];
      this.loginStatus = true;
    }
    this.slidesStore = [
      {
        src:
          "https://soliloquywp.com/wp-content/uploads/2017/10/fullwidth-image-slider.jpg"
      }
    ];
    let base;
    let num;
    // var user = JSON.parse(localStorage.getItem("user_data"));

    // if (user == null) {
    //   this.loginStatus = false;
    //   // this.router.navigateByUrl('login')
    // } else {
    //   this.data = user["user"];
    //   this.loginStatus = true;
    // }

    this.route.params.subscribe(params => {
      if (params["id"]) {
        this.listingId = params["id"];
        base = this.http.post("http://pakdial.com/api/Listing/view", {
          listing_id: params["id"]
        });
        base.subscribe(
          data => {
            this.responses = data;
            //debugger
            this.avg = data['AVG_RATING']
            this.title = data['listing']['company_name']
            this.reviews = data['reviews']
            this.slidesStore = data["gallery"];
            
            // console.log(this.percentage)
            document
              .getElementsByClassName("circle small")[0]
              .setAttribute(
                "data-fill",
                parseInt(data["RATING_PERCENTAGE"]) + ""
              );
          },
          error => {
            this.toastr.error("Error!", "Internal Eroor!");
          }
        );
        var user_id = parseInt(
          JSON.parse(localStorage.getItem("user_data"))["user"].user_id
        );

        this.http
          .post("http://pakdial.com/api/Listing/user_favorites", {
            userId: user_id
          })
          .subscribe(
            data => {
              this.responses = data;
            },
            error => {
              this.toastr.error("error ", "Internal Server .");
            }
          );
      }
    });
  }
  saveItem(event) {
    if (this.loginStatus) {
      this.isDisabled = true;
      var user_id = parseInt(
        JSON.parse(localStorage.getItem("user_data"))["user"].user_id
      );
      var listingId = this.listingId;
      this.http
        .post("http://pakdial.com/api/Listing/save_item", {
          user_id: user_id,
          listing_id: listingId
        })
        .subscribe(d => console.log(d));
    } else {
      this.router.navigateByUrl("/login");
    }
  }
  alsoListedclicked(event, data) {
    this.share.setPosition();
    var inc = this.share.getPosition();
    this.share.setData(inc, data);
    this.router.navigateByUrl("/location");
  }
  bestdealclicked(event) {
    console.log("hi there!");
    this.route.params.subscribe(params => {
      if (params["id"]) {
        this.router.navigateByUrl("/bestDeal/" + params["id"]);
      }
    });
  }
  ratechanged() {
    this.share.setData("rating", this.credentials.rating_val);
    this.router.navigateByUrl("/review");
  }

  backArrow() {
    this._location.back();
  }

  notificationCheck() {
    if ((this.loginStatus = true)) {
      this.router.navigateByUrl("notification");
    }
  }

  menuOpen() {
    this.router.navigateByUrl("sideMenu");
  }

  ratingGet(str) {
    if(str == 'friend'){
      localStorage.setItem("rating_select", 0 + "");
      localStorage.setItem("listingId", this.listingId + "");
      this.router.navigate(["review-rating"]);

    }else{
      localStorage.setItem("rating_select", this.rateValue + "");
      localStorage.setItem("listingId", this.listingId + "");
      this.router.navigate(["review-rating"]);
    }

  }
}

import { Component, OnInit } from "@angular/core";
import { CommonFunctionService } from "src/app/services/common-function.service";
import { HttpClient } from "@angular/common/http";
import { ToastrService } from "ngx-toastr";
import { Location } from "@angular/common";

@Component({
  selector: "app-review-rating",
  templateUrl: "./review-rating.component.html",
  styleUrls: ["./review-rating.component.css"]
})
export class ReviewRatingComponent implements OnInit {
  rate: number;
  responces: any;
  sForm = new data();
  imageUrl: any;
  fileToUpload: File = null;
  constructor(
    public location: Location,
    public toastr: ToastrService,
    public http: HttpClient,
    public common: CommonFunctionService
  ) {}

  ngOnInit() {
    // window.location.reload();
    // console.log(JSON.parse(localStorage.getItem('rating_select')))
    this.sForm.name = this.sForm.reviewmessage = this.sForm.mobile = "";

    this.rate = JSON.parse(localStorage.getItem("rating_select"));
    this.sForm.userId = parseInt(
      JSON.parse(localStorage.getItem("user_data"))["user"].user_id
    );
    this.sForm.listing_id = parseInt(
      JSON.parse(localStorage.getItem("listingId"))
    );

    this.sForm.rating_val = this.rate;
    console.log(this.rate);
    this.http
      .post("http://pakdial.com/api/Listing/view", {
        listing_id: JSON.parse(localStorage.getItem("listingId"))
      })
      .subscribe(data => {
        this.responces = data;
        if (this.responces["listing"] != null)
          console.log(this.responces["listing"]["company_name"]);
      });
  }
  rateSave() {
    this.sForm.rating_image = this.imageUrl;
    if (
      this.sForm.name == "" ||
      this.sForm.reviewmessage == "" ||
      this.sForm.mobile == ""
    ) {
      this.toastr.error("Invalid", "please fill the mandatory details");
    } else {
      this.http
      .post("http://pakdial.com/api/Listing/ajax_mod_rating", this.sForm)
      .subscribe(
        data => {
          // this.responces = data
          if (data["msg"] == "SuccessFully Added Review") {
            this.toastr.success("Success", "Succefully Rating ");
            this.location.back();
          }
        },
        error => {
          this.toastr.error("Error", "Internal error");
        }
      );
    }
    
  }

  ratingGet() {}
  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);
    console.log("File to upload: ", this.fileToUpload);

    // Show image preview
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
    reader.readAsDataURL(this.fileToUpload);
  }
}

export class data {
  name: string;
  listing_id: number;
  rating_val: number;
  reviewmessage: string;
  userId: number;
  mobile: string;
  rating_image: any;
}

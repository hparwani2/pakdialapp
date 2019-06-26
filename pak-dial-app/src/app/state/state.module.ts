import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StateRoutingModule } from './state-routing.module';
import { StateComponent } from './state.component';
import { StateDetailsComponent } from './state-details/state-details.component';
import { BarRatingModule } from 'ngx-bar-rating';
import { DetailsComponent } from './details/details.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { StarRatingModule } from 'angular-star-rating';
import { SocialShareComponent } from './social-share/social-share.component';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [StateComponent, StateDetailsComponent, DetailsComponent, SocialShareComponent],
  imports: [
    CommonModule,
    StateRoutingModule,
    BarRatingModule,
    CarouselModule,
    FormsModule,
    // StarRatingModule,
    ToastrModule.forRoot()
  ]
})
export class StateModule { }

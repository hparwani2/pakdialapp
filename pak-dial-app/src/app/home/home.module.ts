import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SideMenuComponent } from './component/side-menu/side-menu.component';
import { SearchComponent } from './component/search/search.component';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { SocialLandingComponent } from './social-landing/social-landing.component';
import { AdvertiseComponent } from './advertise/advertise.component';
import { FreeListingComponent } from './free-listing/free-listing.component';
import { FooterComponent } from './component/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { NotificationComponent } from './notification/notification.component';
import { BestDealComponent } from './best-deal/best-deal.component';
import { ReportComponent } from './report/report.component';
import { ReviewRatingComponent } from './review-rating/review-rating.component';
import { AlertModule } from 'ngx-alerts';
import { FavouritesComponent } from './favourites/favourites.component';
import { SavedItemsComponent } from './saved-items/saved-items.component';
import { MyTransactionComponent } from './my-transaction/my-transaction.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HelpSupportComponent } from './help-support/help-support.component';
import { PrivacySettingComponent } from './privacy-setting/privacy-setting.component';
import { HeaderComponent } from './header/header.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [HomeComponent, SideMenuComponent, SearchComponent, SocialLandingComponent, AdvertiseComponent, FreeListingComponent, FooterComponent, NotificationComponent, BestDealComponent, ReportComponent, ReviewRatingComponent, FavouritesComponent, SavedItemsComponent, MyTransactionComponent, AboutUsComponent, HelpSupportComponent, PrivacySettingComponent, HeaderComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AutocompleteLibModule,
    FormsModule,
    AlertModule.forRoot({maxMessages: 5, timeout: 5000, position: 'right'}),
    ToastrModule.forRoot()

  ]
})
export class HomeModule { }

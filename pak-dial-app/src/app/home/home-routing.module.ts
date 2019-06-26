import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { SideMenuComponent } from './component/side-menu/side-menu.component';
import { SocialLandingComponent } from './social-landing/social-landing.component';
import { AdvertiseComponent } from './advertise/advertise.component';
import { FreeListingComponent } from './free-listing/free-listing.component';
import { SearchComponent } from './component/search/search.component';
import { NotificationComponent } from './notification/notification.component';
import { BestDealComponent } from './best-deal/best-deal.component';
import { ReviewRatingComponent } from './review-rating/review-rating.component';
import { ReportComponent } from './report/report.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { SavedItemsComponent } from './saved-items/saved-items.component';
import { MyTransactionComponent } from './my-transaction/my-transaction.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HelpSupportComponent } from './help-support/help-support.component';
import { PrivacySettingComponent } from './privacy-setting/privacy-setting.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'sideMenu',
    component: SideMenuComponent
  },
  {
    path: 'bestDeal',
    component: BestDealComponent
  },
  {
    path: 'bestDeal/:id',
    component: BestDealComponent
  },
  {
    path: 'review-rating',
    component: ReviewRatingComponent
  },
  {
    path: 'report/:id',
    component: ReportComponent
  },
  {
    path: 'social-landing',
    component: SocialLandingComponent
  },
  {
    path: 'advertise',
    component: AdvertiseComponent
  },
  {
    path: 'free-listing',
    component: FreeListingComponent
  }
  ,
  {
    path: 'search',
    component: SearchComponent
  }
  ,
  {
    path: 'notification',
    component: NotificationComponent
  },
  {
    path: 'favourites',
    component: FavouritesComponent
  },


  {
    path: 'saved-items',
    component: SavedItemsComponent
  }
  ,
  {
    path: 'my-transaction',
    component: MyTransactionComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  }
  // help-support
  ,
  {
    path: 'help-support',
    component: HelpSupportComponent
  }
  ,
  {
    path: 'privacy-setting',
    component: PrivacySettingComponent
  },
  {
    path: 'free-listing',
    component: FreeListingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

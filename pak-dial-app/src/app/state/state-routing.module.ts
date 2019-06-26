import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StateComponent } from './state.component';
import { StateDetailsComponent } from './state-details/state-details.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  // { path: '', redirectTo: 'state', pathMatch: 'full' },
  { path: '', component: StateComponent },
  { path: 'state-details/:id', component: StateDetailsComponent },
  {
    path: ':/category_name',
    component: StateComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StateRoutingModule { }

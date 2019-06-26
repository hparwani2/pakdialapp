import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { AlertModule } from 'ngx-alerts';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    AlertModule.forRoot({maxMessages: 5, timeout: 5000, position: 'right'}),
   FormsModule,
   ToastrModule
  ]
})
export class LoginModule { }

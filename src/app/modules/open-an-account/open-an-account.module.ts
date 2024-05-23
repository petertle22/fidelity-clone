import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpenAnAccountRoutingModule } from './open-an-account-routing.module';
import { OpenAnAccountComponent } from './open-an-account/open-an-account.component';


@NgModule({
  declarations: [
    OpenAnAccountComponent
  ],
  imports: [
    CommonModule,
    OpenAnAccountRoutingModule
  ]
})
export class OpenAnAccountModule { }

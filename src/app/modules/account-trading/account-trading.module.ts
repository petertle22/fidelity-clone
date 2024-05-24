import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountTradingRoutingModule } from './account-trading-routing.module';
import { AccountTradingComponent } from './account-trading/account-trading.component';


@NgModule({
  declarations: [
    AccountTradingComponent
  ],
  imports: [
    CommonModule,
    AccountTradingRoutingModule
  ]
})
export class AccountTradingModule { }

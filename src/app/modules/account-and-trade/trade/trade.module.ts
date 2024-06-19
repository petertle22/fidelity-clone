import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoCompleteModule } from 'primeng/autocomplete';

import { TradeRoutingModule } from './trade-routing.module';
import { TradeComponent } from './trade/trade.component';


@NgModule({
  declarations: [
    TradeComponent
  ],
  imports: [
    CommonModule,
    TradeRoutingModule,
    AutoCompleteModule,
  ]
})
export class TradeModule { }

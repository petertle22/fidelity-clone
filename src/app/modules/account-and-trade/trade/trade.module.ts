import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoCompleteModule } from 'primeng/autocomplete';

import { TradeRoutingModule } from './trade-routing.module';
import { TradeComponent } from './trade/trade.component';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';


@NgModule({
  declarations: [
    TradeComponent
    
  ],
  imports: [
    CommonModule,
    TradeRoutingModule,
    AutoCompleteModule,
    FormsModule,
    DropdownModule
  ]
})
export class TradeModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoCompleteModule } from 'primeng/autocomplete';

import { TradeRoutingModule } from './trade-routing.module';
import { TradeComponent } from './trade/trade.component';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    TradeComponent
    
  ],
  imports: [
    CommonModule,
    TradeRoutingModule,
    AutoCompleteModule,
    FormsModule,
    DropdownModule,
    FloatLabelModule,
    ButtonModule,
  ]
})
export class TradeModule { }

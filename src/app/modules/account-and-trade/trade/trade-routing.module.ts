import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TradeComponent } from './trade/trade.component'; 
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

const routes: Routes = [
  {
    path: '',
    component: TradeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), MatSlideToggleModule],
  exports: [RouterModule]
})
export class TradeRoutingModule { }

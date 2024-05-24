import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountTradingComponent } from './account-trading/account-trading.component';

const routes: Routes = [
  {
    path: '',
    component: AccountTradingComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountTradingRoutingModule { }

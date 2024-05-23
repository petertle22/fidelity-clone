import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpenAnAccountComponent } from './open-an-account/open-an-account.component';

const routes: Routes = [
  {
    path: '',
    component: OpenAnAccountComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OpenAnAccountRoutingModule { }

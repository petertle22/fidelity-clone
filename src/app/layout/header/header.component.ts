import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgIf } from '@angular/common';
import { AccountAndTradeComponent } from '../../modules/account-and-trade/account-and-trade.component';
import { PlanningAndAdviceComponent } from '../../modules/planning-and-advice/planning-and-advice.component';
import { NewsAndResearchComponent } from '../../modules/news-and-research/news-and-research.component';
import { ProductsComponent } from '../../modules/products/products.component';
import { WhyFidelityComponent } from '../../modules/why-fidelity/why-fidelity.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterModule,
    NgIf,
    AccountAndTradeComponent,
    PlanningAndAdviceComponent,
    NewsAndResearchComponent,
    ProductsComponent,
    WhyFidelityComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  dropdownVisible = false;

  showDropdown() {
    this.dropdownVisible = true;
  }

  hideDropdown() {
    this.dropdownVisible = false;
  }
}

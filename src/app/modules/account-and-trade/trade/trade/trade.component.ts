import { Component } from '@angular/core';
import { ProductsService } from '../../../../services/products.service';
import { StockListing, StockListings } from '../../../../../types';

import { AutoCompleteModule } from 'primeng/autocomplete';

@Component({
  selector: 'app-trade',
  templateUrl: './trade.component.html',
  styleUrl: './trade.component.scss',
  imports: [AutoCompleteModule],
  standalone: true,
  
})
export class TradeComponent {
  orderDue: number = 69.69;
  extendedTradingHours: boolean = false;
  stockList: StockListing[] = [];

  constructor(private productService: ProductsService) {

    this.productService
    .getProducts('http://localhost:3000/trade', { page: 0, perPage: 5 })
    .subscribe((products: StockListings) => {
      this.stockList = products.items;
    });
  }


  getOrderDue(): string {
    return this.orderDue.toString();
  }

  isExtendedTradingHours(): string {
    return this.extendedTradingHours == true ? "On" : "Off";
  } 
}

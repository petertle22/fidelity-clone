import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { ProductsService } from '../../../../services/products.service';
import { StockListing, StockListings } from '../../../../../types';

@Component({
  selector: 'app-trade',
  templateUrl: './trade.component.html',
  styleUrl: './trade.component.scss',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule]
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

import { Component } from '@angular/core';
import { ProductsService } from '../../../../services/products.service';
import { StockListing, StockListings } from '../../../../../types';

import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-trade',
  templateUrl: './trade.component.html',
  styleUrl: './trade.component.scss',
  imports: [AutoCompleteModule, FormsModule],
  standalone: true,
})
export class TradeComponent {
  orderDue: number = 69.69;
  extendedTradingHours: boolean = false;
  stockList: StockListing[] = [];

  tickerSymbolInput: string = '';
  tickerSymbolList: any[] = [];

  constructor(private productService: ProductsService) {
    this.productService
      .getProducts('http://localhost:3000/trade', { page: 0, perPage: 5 })
      .subscribe((products: StockListings) => {
        this.stockList = products.items;
        console.log(this.stockList);
      });

    this.tickerSymbolList = new Array<string>(this.stockList.length);

    for (let i = 0; i < this.stockList.length; i++) {
      this.tickerSymbolList[i] = this.stockList[i].symbol;
    }
    console.log('Here');
    console.log(this.tickerSymbolList);
    console.log('Here 2');
  }

  search(event: any) {
    const query = event.query;
    // Implement your search logic here
    this.tickerSymbolList = this.filterSymbols(query);
  }

  filterSymbols(query: string): string[] {
    const symbols = this.tickerSymbolList; // Example symbols
    return symbols.filter((symbol) =>
      symbol.toLowerCase().includes(query.toLowerCase())
    );
  }

  getOrderDue(): string {
    return this.orderDue.toString();
  }

  isExtendedTradingHours(): string {
    return this.extendedTradingHours == true ? 'On' : 'Off';
  }
}

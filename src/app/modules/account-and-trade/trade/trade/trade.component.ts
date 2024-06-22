import { Component } from '@angular/core';
import { ProductsService } from '../../../../services/products.service';
import {
  StockListing,
  StockListings,
  InvestmentOption,
  SecurityAccount,
  SecurityTradingOption,
  SecurityOrderType,
  ExpirationType,
} from '../../../../../types';

import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-trade',
  templateUrl: './trade.component.html',
  styleUrl: './trade.component.scss',
  imports: [
    AutoCompleteModule,
    FormsModule,
    DropdownModule,
    InputTextModule,
    FloatLabelModule,
    ButtonModule,
  ],
  standalone: true,
})
export class TradeComponent {
  orderDue: number = 69.69;
  extendedTradingHours: boolean = false;
  stockList: StockListing[] = [];

  tickerSymbolInput: string | undefined;
  tickerSymbolList: any[] = [];

  investmentOptions: InvestmentOption[] | undefined;
  selectedInvestmentOption: InvestmentOption | undefined;

  accountOptions: SecurityAccount[] | undefined;
  selectedAccountOption: SecurityAccount | undefined;

  securityTradingOptions: SecurityTradingOption[] | undefined;
  selectedSecurityTradingOption: SecurityTradingOption | undefined;

  securityOrderTypes: SecurityOrderType[] | undefined;
  selectedSecurityOrderType: SecurityOrderType | undefined;

  expirationTypes: ExpirationType[] | undefined;
  selectedExpirationType: ExpirationType | undefined;

  quantityValue: string | undefined;

  ngOnInit() {
    this.investmentOptions = [
      { type: 'Stock/ETFs' },
      { type: 'Options' },
      { type: 'Mutual Funds' },
      { type: 'Crypto' },
      { type: 'Fixed Income' },
      { type: 'Conditional' },
      { type: 'Baskets' },
    ];

    this.accountOptions = [
      { accountName: 'Account 1' },
      { accountName: 'Account 2' },
    ];

    this.securityTradingOptions = [{ type: 'Buy' }, { type: 'Sell' }];

    this.securityOrderTypes = [
      { type: 'Market' },
      { type: 'Limit' },
      { type: 'Conditional' },
      { type: 'Stop Loss' },
      { type: 'Stop Limit' },
      { type: 'Trailing Stop Loss ($)' },
      { type: 'Trailing Stop Loss (%)' },
      { type: 'Trailing Stop Limit ($)' },
      { type: 'Trailing Stop Limit (%)' },
    ];

    this.expirationTypes = [
      { expiration: 'Day' },
      { expiration: 'Good til' },
      { expiration: 'Canceled' },
      { expiration: 'Fill or Kill' },
      { expiration: 'Immediate or Cancel' },
      { expiration: 'On the Open' },
      { expiration: 'On the Close' },
    ];
  }

  constructor(private productService: ProductsService) {
    this.productService
      .getProducts('http://localhost:3000/trade', { page: 0, perPage: 5 })
      .subscribe((products: StockListings) => {
        this.stockList = products.items;
      });
  }

  search(event: any) {
    const query = event.query;
    // Implement your search logic here
    this.tickerSymbolList = this.filterSymbols(query);
  }

  filterSymbols(query: string): string[] {
    const symbols = this.stockList
      .map((item) => ({ symbol: item.symbol }))
      .map((item) => item.symbol);
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

  areInvestmentOrderFieldsValid(): boolean {
    return (this.selectedAccountOption         == undefined ||
            this.tickerSymbolInput             == undefined ||
            this.selectedSecurityTradingOption == undefined ||
            this.selectedSecurityOrderType     == undefined ||
            this.selectedExpirationType        == undefined ||
            this.quantityValue                 == undefined);
  }

  previewOrder(): void {
    if (!this.areInvestmentOrderFieldsValid()) {
      console.log("Required input field is undefined");
      return;
    }

  }
}

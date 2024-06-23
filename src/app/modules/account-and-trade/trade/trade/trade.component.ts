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
  SecurityOrder,
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
  selectedInvestmentOption: InvestmentOption = { type: '' };

  accountOptions: SecurityAccount[] | undefined;
  selectedAccountOption: SecurityAccount = { accountName: '' };

  securityTradingOptions: SecurityTradingOption[] | undefined;
  selectedSecurityTradingOption: SecurityTradingOption = { type: '' };

  securityOrderTypes: SecurityOrderType[] | undefined;
  selectedSecurityOrderType: SecurityOrderType = { type: '' };

  expirationTypes: ExpirationType[] | undefined;
  selectedExpirationType: ExpirationType = { expiration: '' };

  quantityValue: string = '';

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

  areInvestmentOrderFieldsInvalid(): boolean {
    return (
      this.selectedAccountOption.accountName  == '' ||
      this.tickerSymbolInput                  == '' ||
      this.selectedSecurityTradingOption.type == '' ||
      this.selectedSecurityOrderType.type     == '' ||
      this.selectedExpirationType.expiration  == '' ||
      this.quantityValue == ''
    );
  }

  previewOrder(): void {
    if (this.areInvestmentOrderFieldsInvalid()) {
      console.log('Required input field is undefined');
      return;
    }

    const order: SecurityOrder = {
      selectedAccountOption: String(this.selectedAccountOption.accountName),
      tickerSymbol: String(this.tickerSymbolInput),
      securityTradingOption: String(this.selectedSecurityTradingOption.type),
      securityOrderType: String(this.selectedSecurityOrderType?.type),
      expirationType: String(this.selectedExpirationType.expiration),
      quantityalue: String(this.quantityValue), // Assuming this is correct. Otherwise, use quantityValue if it's a typo.
    };

    this.productService.sendInvestmentOrder(
      'http://localhost:3000/trade',
      order
    );
  }
}

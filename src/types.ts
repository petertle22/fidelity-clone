import { HttpContext, HttpHeaders, HttpParams } from '@angular/common/http';

export interface Options {
  headers?:
    | HttpHeaders
    | {
        [header: string]: string | string[];
      };
  observe?: 'body';
  context?: HttpContext;
  params?:
    | HttpParams
    | {
        [param: string]:
          | string
          | number
          | boolean
          | ReadonlyArray<string | number | boolean>;
      };
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
  transferCache?:
    | {
        includeHeaders?: string[];
      }
    | boolean;
}

export interface StocksParams {
    [param: string]:
      | string
      | number
      | boolean
      | ReadonlyArray<string | number | boolean>;
    page: number;
    perPage: number;
  }

export interface StockListing {
  id?: number;
  symbol: string;
  company_name: string;
}

export interface StockListings {
    items: StockListing[];
    total: number;
    perPage: number;
  }
  
export interface InvestmentOption {
  type: string;
}

export interface SecurityAccount {
  accountName: string;
}

export interface SecurityTradingOption {
  type: string;
}
  
export interface SecurityOrderType {
  type: string;
}

export interface ExpirationType {
  expiration: string;
}

export interface SecurityOrder {
  selectedAccountOption: string;
  tickerSymbol:          string;
  securityTradingOption: string;
  securityOrderType:     string;
  expirationType:        string;
  quantityalue:          string;
}
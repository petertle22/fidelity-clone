import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { StocksParams, StockListings } from '../../types';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private apiService: ApiService) {}

  getProducts = (
    url: string,
    params: StocksParams
  ): Observable<StockListings> => {
    return this.apiService.get(url, {
      params,
    });
  };

  sendInvestmentOrder = (url: string, body: any): Observable<any> => {
    return this.apiService.post(url, body, {});
  };
}

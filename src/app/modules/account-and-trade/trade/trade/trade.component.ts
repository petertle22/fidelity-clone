import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

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

  getOrderDue(): string {
    return this.orderDue.toString();
  }

  isExtendedTradingHours(): string {
    return this.extendedTradingHours == true ? "On" : "Off";
  } 
}

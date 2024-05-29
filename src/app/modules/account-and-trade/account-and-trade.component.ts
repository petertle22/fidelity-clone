import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-account-and-trade',
  standalone: true,
  imports: [RouterModule, NgIf],
  templateUrl: './account-and-trade.component.html',
  styleUrl: './account-and-trade.component.scss'
})
export class AccountAndTradeComponent {
  dropdownVisible = false;

  showDropdown() {
    this.dropdownVisible = true;
  }

  hideDropdown() {
    this.dropdownVisible = false;
  }
}

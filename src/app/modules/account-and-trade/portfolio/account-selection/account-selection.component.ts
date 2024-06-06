import { Component } from '@angular/core';

@Component({
  selector: 'app-account-selection',
  standalone: true,
  imports: [],
  templateUrl: './account-selection.component.html',
  styleUrl: './account-selection.component.scss'
})
export class AccountSelectionComponent {

  constructor(private accountName: string, private assetsUnderManagement: number) {

  }  

  getAccountName(): string {
    return this.accountName;
  }

  getAssetsUnderManagement(): number {
    return this.assetsUnderManagement;
  }
}

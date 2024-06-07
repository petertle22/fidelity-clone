import { Component } from '@angular/core';
import { Input } from '@angular/core'; 

@Component({
  selector: 'app-account-selection',
  standalone: true,
  imports: [],
  templateUrl: './account-selection.component.html',
  styleUrl: './account-selection.component.scss'
})
export class AccountSelectionComponent {

  @Input() accountName: string = "";
  @Input() assetsUnderManagement: number = 0.0;

  getAccountName(): string {
    return this.accountName;
  }

  getAssetsUnderManagement(): number {
    return this.assetsUnderManagement;
  }
}

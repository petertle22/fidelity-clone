import { Component } from '@angular/core';
import { AccountSelectionComponent } from '../account-selection/account-selection.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
  imports: [CommonModule, AccountSelectionComponent],
  standalone: true,
})
export class PortfolioComponent {
  assetsUnderManagement: number = 69.69;
}

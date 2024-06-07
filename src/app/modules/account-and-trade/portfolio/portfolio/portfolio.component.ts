import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
  imports: [CommonModule],
  standalone: true,
})
export class PortfolioComponent {
  assetsUnderManagement: number = 69.69;
}

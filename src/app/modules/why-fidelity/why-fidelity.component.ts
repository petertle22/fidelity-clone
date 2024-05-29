import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-why-fidelity',
  standalone: true,
  imports: [NgIf],
  templateUrl: './why-fidelity.component.html',
  styleUrl: './why-fidelity.component.scss'
})
export class WhyFidelityComponent {
  dropdownVisible = false;

  showDropdown() {
    this.dropdownVisible = true;
  }

  hideDropdown() {
    this.dropdownVisible = false;
  }
}

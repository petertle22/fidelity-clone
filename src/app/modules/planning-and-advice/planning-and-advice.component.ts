import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-planning-and-advice',
  standalone: true,
  imports: [NgIf],
  templateUrl: './planning-and-advice.component.html',
  styleUrl: './planning-and-advice.component.scss'
})
export class PlanningAndAdviceComponent {
  dropdownVisible = false;

  showDropdown() {
    this.dropdownVisible = true;
  }

  hideDropdown() {
    this.dropdownVisible = false;
  }
}

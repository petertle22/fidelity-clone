import { NgIf } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-news-and-research',
  standalone: true,
  imports: [NgIf],
  templateUrl: './news-and-research.component.html',
  styleUrl: './news-and-research.component.scss'
})
export class NewsAndResearchComponent {
  dropdownVisible = false;

  showDropdown() {
    this.dropdownVisible = true;
  }

  hideDropdown() {
    this.dropdownVisible = false;
  }
}

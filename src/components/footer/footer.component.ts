import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, NgIf],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  categoriesOpen = false;
  currentYear = new Date().getFullYear();

  toggleCategories() {
    this.categoriesOpen = !this.categoriesOpen;


  }
}
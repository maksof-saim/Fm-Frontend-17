import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  mobileOpen = false;
  categoriesOpen = false;


  toggleMobile() {
    this.mobileOpen = !this.mobileOpen;
  }


  toggleCategories() {
    this.categoriesOpen = !this.categoriesOpen;
  }
}
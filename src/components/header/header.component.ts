import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../app/services/common.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  mobileOpen = false;
  categoriesOpen = false;
  cartCount = 0;

  constructor(private commonService: CommonService) { }

  toggleMobile() {
    this.mobileOpen = !this.mobileOpen;
  }


  toggleCategories() {
    this.categoriesOpen = !this.categoriesOpen;
  }

  ngOnInit(): void {
    this.commonService.getCartCount().subscribe((count) => {
      this.cartCount = count;
    });
  }
}
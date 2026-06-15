import { Component } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { CommonService } from '../../app/services/common.service';
import { SwiperComponent } from '../../components/swiper/swiper.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgIf, NgFor, SwiperComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  readonly fallbackImage = 'assets/premium.jpg';

  // Product data for the grid
  popularProducts = [
    { id: 101, name: 'Modern Sun Glasses', price: 8.80, imageUrl: 'assets/sun-glasses.jpg', category: 'Fashion', isOnSale: true },
    { id: 102, name: 'Wireless Headphones', price: 49.99, imageUrl: 'assets/premium.jpg', category: 'Electronics', isOnSale: false },
    { id: 103, name: 'Premium Leather Bag', price: 79.99, imageUrl: 'assets/new-premium.jpg', category: 'Accessories', isOnSale: true },
    { id: 104, name: 'Smart Watch X9', price: 129.50, imageUrl: 'assets/premium.jpg', category: 'Gadgets', isOnSale: false },
  ];

  // Quick Links/Category data
  quickCategories = [
    { name: 'Household', icon: '🏠', link: '/household', routerLink: '/household' },
    { name: 'Electronics', icon: '💻', link: '/electronics', routerLink: '/electronics' },
    { name: 'Fruits & Veg', icon: '🥕', link: '/fruits-vegs', routerLink: '/fruits-vegs' },
    { name: 'Sea Food', icon: '🐟', link: '/seafood', routerLink: '/fishes' },
  ];

  constructor(private commonService: CommonService) { }

  addToCart(product: { id: number; name: string; price: number; imageUrl: string; category: string }) {
    this.commonService.addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.imageUrl,
      category: product.category,
    });
  }

  onImageError(event: Event) {
    (event.target as HTMLImageElement).src = this.fallbackImage;
  }
}

import { Component, OnInit } from '@angular/core';
import { FishService } from '../../app/services/fish.service';
import { Fish } from '../../app/models/fish.model';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { CommonService } from '../../app/services/common.service';
import { SwiperComponent } from '../../components/swiper/swiper.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgIf, NgFor, SwiperComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  // Product data for the grid
  popularProducts = [
    { id: 1, name: 'Modern Sun Glasses', price: 8.80, imageUrl: 'assets/sunglasses.jpg', category: 'Fashion', isOnSale: true },
    { id: 2, name: 'Wireless Headphones', price: 49.99, imageUrl: 'assets/headphones.jpg', category: 'Electronics', isOnSale: false },
    { id: 3, name: 'Premium Leather Bag', price: 79.99, imageUrl: 'assets/bag.jpg', category: 'Accessories', isOnSale: true },
    { id: 4, name: 'Smart Watch X9', price: 129.50, imageUrl: 'assets/watch.jpg', category: 'Gadgets', isOnSale: false },
  ];

  // Quick Links/Category data
  quickCategories = [
    { name: 'Fashion', icon: '👕👕👕', link: '/fashion' },
    { name: 'Electronics', icon: '💻💻💻', link: '/electronics' },
    { name: 'Home Goods', icon: '🛋️🛋️🛋️', link: '/home' },
    { name: 'Today\'s Deals', icon: '🔥🔥🔥', link: '/deals' },
  ];
}
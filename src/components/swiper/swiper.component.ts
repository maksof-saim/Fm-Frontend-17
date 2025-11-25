import { Component, Input, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-swiper',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './swiper.component.html',
  host: {
    ngSkipHydration: 'true'  // ✔ correct place
  }
})
export class SwiperComponent {
  @Input() products: { name: string; image: string; price: number }[] = [
    { name: 'Sun Glasses', image: 'assets/new-premium.jpg', price: 8.8 },
    { name: 'Cool Hat', image: 'assets/new-premium.jpg', price: 12.5 },
    { name: 'Winter Jacket', image: 'assets/new-premium.jpg', price: 45.0 },
  ];
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface CartItem {
  id: number;
  title: string;
  subtitle?: string;
  price: number;
  qty: number;
  image?: string;
}

@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  standalone: true,
})
export class CartComponent {
  items: CartItem[] = [
    {
      id: 1,
      title: 'Lunar Hoodie',
      subtitle: 'Soft fleece comfort',
      price: 49.99,
      qty: 1,
      image: 'https://images.unsplash.com/photo-1585386959984-a4155224a1d1?w=400',
    },
    {
      id: 2,
      title: 'Mystic Mug',
      subtitle: 'Glow-in-dark print',
      price: 19.99,
      qty: 2,
      image: 'https://images.unsplash.com/photo-1580910051073-9b4d1da0d1cf?w=400',
    },
  ];

  increment(item: CartItem) {
    item.qty++;
  }

  decrement(item: CartItem) {
    if (item.qty > 1) item.qty--;
  }

  remove(item: CartItem) {
    this.items = this.items.filter(i => i.id !== item.id);
  }

  get subtotal() {
    return this.items.reduce((sum, i) => sum + i.price * i.qty, 0);
  }

  get shipping() {
    return this.subtotal > 100 ? 0 : 5;
  }

  get discount() {
    return this.subtotal > 200 ? this.subtotal * 0.05 : 0;
  }

  get total() {
    return this.subtotal + this.shipping - this.discount;
  }
}

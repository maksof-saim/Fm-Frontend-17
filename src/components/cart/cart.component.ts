import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonService } from '../../app/services/common.service';
import { CartItem } from '../../app/models/product.model';

@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  standalone: true,
})
export class CartComponent implements OnInit, OnDestroy {
  items: CartItem[] = [];
  private sub?: Subscription;

  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    this.sub = this.commonService.cartItems$.subscribe(items => {
      this.items = items;
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  increment(item: CartItem) {
    this.commonService.increment(item.id);
  }

  decrement(item: CartItem) {
    this.commonService.decrement(item.id);
  }

  remove(item: CartItem) {
    this.commonService.removeFromCart(item);
  }

  get subtotal() {
    return this.items.reduce((sum, i) => sum + i.price * i.qty, 0);
  }

  get shipping() {
    if (this.subtotal === 0) return 0;
    return this.subtotal > 100 ? 0 : 5;
  }

  get discount() {
    return this.subtotal > 200 ? this.subtotal * 0.05 : 0;
  }

  get total() {
    return this.subtotal + this.shipping - this.discount;
  }
}

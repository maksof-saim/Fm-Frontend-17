import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { CartItem, Product } from '../models/product.model';

const STORAGE_KEY = 'fm_cart';

@Injectable({
    providedIn: 'root'
})
export class CommonService {
    private platformId = inject(PLATFORM_ID);

    private items: CartItem[] = this.loadFromStorage();

    private cartItems = new BehaviorSubject<CartItem[]>(this.items);
    cartItems$ = this.cartItems.asObservable();

    private cartCount = new BehaviorSubject<number>(this.totalQty());
    cartCount$ = this.cartCount.asObservable();

    addToCart(product: Product) {
        const existing = this.items.find(item => item.id === product.id);
        if (existing) {
            existing.qty++;
        } else {
            this.items.push({ ...product, qty: 1 });
        }
        this.emit();
    }

    removeFromCart(product: Pick<Product, 'id'>) {
        this.items = this.items.filter(item => item.id !== product.id);
        this.emit();
    }

    increment(id: number) {
        const item = this.items.find(i => i.id === id);
        if (item) {
            item.qty++;
            this.emit();
        }
    }

    decrement(id: number) {
        const item = this.items.find(i => i.id === id);
        if (item && item.qty > 1) {
            item.qty--;
            this.emit();
        }
    }

    clearCart() {
        this.items = [];
        this.emit();
    }

    getItems(): CartItem[] {
        return this.items;
    }

    getCartCount() {
        return this.cartCount$;
    }

    private totalQty(): number {
        return this.items.reduce((sum, item) => sum + item.qty, 0);
    }

    private emit() {
        this.cartItems.next([...this.items]);
        this.cartCount.next(this.totalQty());
        this.saveToStorage();
    }

    private loadFromStorage(): CartItem[] {
        if (!isPlatformBrowser(this.platformId)) {
            return [];
        }
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            return raw ? (JSON.parse(raw) as CartItem[]) : [];
        } catch {
            return [];
        }
    }

    private saveToStorage() {
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.items));
    }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CommonService {
    private cartCount = new BehaviorSubject<number>(0);
    cartCount$ = this.cartCount.asObservable();

    private items: any[] = [];

    addToCart(fish: any) {
        this.items.push(fish);
        this.cartCount.next(this.items.length);
    }
    removeFromCart(fish: any) {
        this.items = this.items.filter(item => item.id !== fish.id);
        this.cartCount.next(this.items.length);
    }
    getCartCount() {
        return this.cartCount.asObservable();
    }
}

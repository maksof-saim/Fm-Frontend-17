import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { ButtonComponent } from '../../components/button/button.component';
import { CommonService } from '../../app/services/common.service';
import { Product } from '../../app/models/product.model';


@Component({
  selector: 'app-fruits-vegs',
  standalone: true,
  imports: [CommonModule, NgIf, NgFor, ButtonComponent

  ],
  templateUrl: './fruits-vegs.component.html',
  styleUrl: './fruits-vegs.component.scss'
})
export class FruitsVegsComponent implements OnInit {

  error: string | null = null;

  FruitsVegses = [
    { id: 1, name: "Apple", price: 250, discount: 5, image: "https://centerforfamilymedicine.com/wp-content/uploads/2020/06/Center-for-family-medicine-The-Health-Benefits-of-Eating-10-Servings-Of-Fruits-_-Veggies-Per-Day.jpg", rating: 4.7 },
    { id: 2, name: "Banana", price: 120, discount: 3, image: "https://centerforfamilymedicine.com/wp-content/uploads/2020/06/Center-for-family-medicine-The-Health-Benefits-of-Eating-10-Servings-Of-Fruits-_-Veggies-Per-Day.jpg", rating: 4.6 },
    { id: 3, name: "Tomato", price: 90, discount: 4, image: "https://centerforfamilymedicine.com/wp-content/uploads/2020/06/Center-for-family-medicine-The-Health-Benefits-of-Eating-10-Servings-Of-Fruits-_-Veggies-Per-Day.jpg", rating: 4.3 },
    { id: 4, name: "Potato", price: 60, discount: 2, image: "https://centerforfamilymedicine.com/wp-content/uploads/2020/06/Center-for-family-medicine-The-Health-Benefits-of-Eating-10-Servings-Of-Fruits-_-Veggies-Per-Day.jpg", rating: 4.2 },
    { id: 5, name: "Carrot", price: 130, discount: 3, image: "https://centerforfamilymedicine.com/wp-content/uploads/2020/06/Center-for-family-medicine-The-Health-Benefits-of-Eating-10-Servings-Of-Fruits-_-Veggies-Per-Day.jpg", rating: 4.5 },
    { id: 6, name: "Lemon", price: 70, discount: 2, image: "https://centerforfamilymedicine.com/wp-content/uploads/2020/06/Center-for-family-medicine-The-Health-Benefits-of-Eating-10-Servings-Of-Fruits-_-Veggies-Per-Day.jpg", rating: 4.1 },
    { id: 7, name: "Orange", price: 200, discount: 5, image: "https://centerforfamilymedicine.com/wp-content/uploads/2020/06/Center-for-family-medicine-The-Health-Benefits-of-Eating-10-Servings-Of-Fruits-_-Veggies-Per-Day.jpg", rating: 4.6 },
    { id: 8, name: "Broccoli", price: 180, discount: 7, image: "https://centerforfamilymedicine.com/wp-content/uploads/2020/06/Center-for-family-medicine-The-Health-Benefits-of-Eating-10-Servings-Of-Fruits-_-Veggies-Per-Day.jpg", rating: 4.4 },
    { id: 9, name: "Onions", price: 90, discount: 3, image: "https://centerforfamilymedicine.com/wp-content/uploads/2020/06/Center-for-family-medicine-The-Health-Benefits-of-Eating-10-Servings-Of-Fruits-_-Veggies-Per-Day.jpg", rating: 4.2 },
    { id: 10, name: "Grapes", price: 350, discount: 6, image: "https://centerforfamilymedicine.com/wp-content/uploads/2020/06/Center-for-family-medicine-The-Health-Benefits-of-Eating-10-Servings-Of-Fruits-_-Veggies-Per-Day.jpg", rating: 4.7 }
  ];






  constructor(private commonService: CommonService) { }

  ngOnInit(): void { }

  addToCart(fruitsVegs: Product) {
    this.commonService.addToCart(fruitsVegs);
  }

  removeFromCart(FruitsVegs: any) {
    console.log('FruitsVegs removed from cart:', FruitsVegs);
  }

  openDetails(FruitsVegs: any) {
    console.log('FruitsVegs details:', FruitsVegs);
  }

  deleteFruitsVegs(id: number) {
    this.FruitsVegses = this.FruitsVegses.filter(f => f.id !== id);
    console.log('Deleted FruitsVegs ID:', id);
  }
}

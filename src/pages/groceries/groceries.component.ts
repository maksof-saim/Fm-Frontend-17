import { Component, OnInit } from '@angular/core';
import { CommonModule, NgClass, NgFor, NgIf } from '@angular/common';
import { ButtonComponent } from '../../components/button/button.component';



@Component({
  selector: 'app-groceries',
  standalone: true,
  imports: [CommonModule, NgIf, NgFor, ButtonComponent, NgClass],
  templateUrl: './groceries.component.html',
  styleUrl: './groceries.component.scss'
})
export class GroceriesComponent implements OnInit {

  error: string | null = null; // <-- FIXED (important)

  groceries = [
    { id: 1, name: "Olive Oil", price: 950, discount: 10, image: "https://img-cdn.misfitsmarket.com/melodious-taiyaki-9pkr2z/aOZkY55xUNkB1vhz_Assortment_Pile_Mobile-1-.jpg", rating: 4.8 },
    { id: 2, name: "Rice Bag 5kg", price: 1200, discount: 5, image: "https://img-cdn.misfitsmarket.com/melodious-taiyaki-9pkr2z/aOZkY55xUNkB1vhz_Assortment_Pile_Mobile-1-.jpg", rating: 4.5 },
    { id: 3, name: "Brown Bread", price: 180, discount: 4, image: "https://img-cdn.misfitsmarket.com/melodious-taiyaki-9pkr2z/aOZkY55xUNkB1vhz_Assortment_Pile_Mobile-1-.jpg", rating: 4.3 },
    { id: 4, name: "Milk Pack", price: 160, discount: 2, image: "https://img-cdn.misfitsmarket.com/melodious-taiyaki-9pkr2z/aOZkY55xUNkB1vhz_Assortment_Pile_Mobile-1-.jpg", rating: 4.0 },
    { id: 5, name: "Salt", price: 40, discount: 5, image: "https://img-cdn.misfitsmarket.com/melodious-taiyaki-9pkr2z/aOZkY55xUNkB1vhz_Assortment_Pile_Mobile-1-.jpg", rating: 4.2 },
    { id: 6, name: "Sugar 1kg", price: 160, discount: 3, image: "https://img-cdn.misfitsmarket.com/melodious-taiyaki-9pkr2z/aOZkY55xUNkB1vhz_Assortment_Pile_Mobile-1-.jpg", rating: 4.3 },
    { id: 7, name: "Tea Pack", price: 550, discount: 7, image: "https://img-cdn.misfitsmarket.com/melodious-taiyaki-9pkr2z/aOZkY55xUNkB1vhz_Assortment_Pile_Mobile-1-.jpg", rating: 4.6 },
    { id: 8, name: "Coffee Powder", price: 850, discount: 10, image: "https://img-cdn.misfitsmarket.com/melodious-taiyaki-9pkr2z/aOZkY55xUNkB1vhz_Assortment_Pile_Mobile-1-.jpg", rating: 4.7 },
    { id: 9, name: "Cooking Oil", price: 620, discount: 9, image: "https://img-cdn.misfitsmarket.com/melodious-taiyaki-9pkr2z/aOZkY55xUNkB1vhz_Assortment_Pile_Mobile-1-.jpg", rating: 4.4 },
    { id: 10, name: "Flour 5kg", price: 500, discount: 5, image: "https://img-cdn.misfitsmarket.com/melodious-taiyaki-9pkr2z/aOZkY55xUNkB1vhz_Assortment_Pile_Mobile-1-.jpg", rating: 4.5 }
  ];



  ngOnInit(): void { }

  addToCart(Groceries: any) {
    console.log('Groceries added to cart:', Groceries);
  }

  removeFromCart(Groceries: any) {
    console.log('Groceries removed from cart:', Groceries);
  }

  openDetails(Groceries: any) {
    console.log('Groceries details:', Groceries);
  }

  deleteGroceries(id: number) {
    this.groceries = this.groceries.filter(f => f.id !== id);
    console.log('Deleted Groceries ID:', id);
  }
}

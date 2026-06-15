import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { ButtonComponent } from '../../components/button/button.component';
import { CommonService } from '../../app/services/common.service';
import { Product } from '../../app/models/product.model';


@Component({
  selector: 'app-electronics',
  standalone: true,
  imports: [CommonModule, NgIf, NgFor, ButtonComponent

  ],
  templateUrl: './electronics.component.html',
  styleUrl: './electronics.component.scss'
})
export class ElectronicsComponent implements OnInit {

  error: string | null = null;

  electronicses = [
    { id: 1, name: "Smartphone", price: 45000, discount: 12, image: "https://img.freepik.com/premium-photo/home-appliance-with-ribbons-discounts_252025-696.jpg?semt=ais_incoming&w=740&q=80", rating: 4.7 },
    { id: 2, name: "Smartwatch", price: 7500, discount: 10, image: "https://img.freepik.com/premium-photo/home-appliance-with-ribbons-discounts_252025-696.jpg?semt=ais_incoming&w=740&q=80", rating: 4.5 },
    { id: 3, name: "Laptop", price: 95000, discount: 8, image: "https://img.freepik.com/premium-photo/home-appliance-with-ribbons-discounts_252025-696.jpg?semt=ais_incoming&w=740&q=80", rating: 4.8 },
    { id: 4, name: "Bluetooth Speaker", price: 3500, discount: 15, image: "https://img.freepik.com/premium-photo/home-appliance-with-ribbons-discounts_252025-696.jpg?semt=ais_incoming&w=740&q=80", rating: 4.6 },
    { id: 5, name: "Headphones", price: 2200, discount: 10, image: "https://img.freepik.com/premium-photo/home-appliance-with-ribbons-discounts_252025-696.jpg?semt=ais_incoming&w=740&q=80", rating: 4.5 },
    { id: 6, name: "LED TV", price: 68000, discount: 18, image: "https://img.freepik.com/premium-photo/home-appliance-with-ribbons-discounts_252025-696.jpg?semt=ais_incoming&w=740&q=80", rating: 4.7 },
    { id: 7, name: "Wireless Mouse", price: 950, discount: 6, image: "https://img.freepik.com/premium-photo/home-appliance-with-ribbons-discounts_252025-696.jpg?semt=ais_incoming&w=740&q=80", rating: 4.4 },
    { id: 8, name: "Keyboard", price: 1800, discount: 8, image: "https://img.freepik.com/premium-photo/home-appliance-with-ribbons-discounts_252025-696.jpg?semt=ais_incoming&w=740&q=80", rating: 4.3 },
    { id: 9, name: "Power Bank", price: 2400, discount: 12, image: "https://img.freepik.com/premium-photo/home-appliance-with-ribbons-discounts_252025-696.jpg?semt=ais_incoming&w=740&q=80", rating: 4.5 },
    { id: 10, name: "Gaming Console", price: 75000, discount: 10, image: "https://img.freepik.com/premium-photo/home-appliance-with-ribbons-discounts_252025-696.jpg?semt=ais_incoming&w=740&q=80", rating: 4.8 }
  ];





  constructor(private commonService: CommonService) { }

  ngOnInit(): void { }

  addToCart(electronics: Product) {
    this.commonService.addToCart(electronics);
  }

  removeFromCart(electronics: any) {
    console.log('electronics removed from cart:', electronics);
  }

  openDetails(electronics: any) {
    console.log('electronics details:', electronics);
  }

  deleteelectronics(id: number) {
    this.electronicses = this.electronicses.filter(f => f.id !== id);
    console.log('Deleted electronics ID:', id);
  }
}

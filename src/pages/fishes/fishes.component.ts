import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-fishes',
  standalone: true,
  imports: [CommonModule, NgIf, NgFor, ButtonComponent],
  templateUrl: './fishes.component.html',
  styleUrls: ['./fishes.component.scss']
})
export class FishesComponent implements OnInit {

  error: string | null = null; // <-- FIXED (important)

  fishes = [
    { id: 1, name: 'Golden Fish', price: 500, discount: 10, image: 'https://cdn.shopifycdn.net/s/files/1/0595/5800/2887/files/clownfish_2f258448-1b78-44a0-9233-98e17c154474_480x480.jpg?v=1647677494', rating: 4.5 },
    { id: 2, name: 'Blue Tang', price: 1200, discount: 15, image: 'https://cdn.shopifycdn.net/s/files/1/0595/5800/2887/files/clownfish_2f258448-1b78-44a0-9233-98e17c154474_480x480.jpg?v=1647677494', rating: 4.2 },
    { id: 3, name: 'Clown Fish', price: 800, discount: 5, image: 'https://cdn.shopifycdn.net/s/files/1/0595/5800/2887/files/clownfish_2f258448-1b78-44a0-9233-98e17c154474_480x480.jpg?v=1647677494', rating: 4.8 },
    { id: 4, name: 'Guppy Fish', price: 150, discount: 8, image: 'https://cdn.shopifycdn.net/s/files/1/0595/5800/2887/files/clownfish_2f258448-1b78-44a0-9233-98e17c154474_480x480.jpg?v=1647677494', rating: 3.9 },
    { id: 5, name: 'Koi Fish', price: 2000, discount: 20, image: 'https://cdn.shopifycdn.net/s/files/1/0595/5800/2887/files/clownfish_2f258448-1b78-44a0-9233-98e17c154474_480x480.jpg?v=1647677494', rating: 4.7 },
    { id: 6, name: 'Betta Fish', price: 350, discount: 12, image: 'https://cdn.shopifycdn.net/s/files/1/0595/5800/2887/files/clownfish_2f258448-1b78-44a0-9233-98e17c154474_480x480.jpg?v=1647677494', rating: 4.3 },
    { id: 7, name: 'Oscar Fish', price: 900, discount: 10, image: 'https://cdn.shopifycdn.net/s/files/1/0595/5800/2887/files/clownfish_2f258448-1b78-44a0-9233-98e17c154474_480x480.jpg?v=1647677494', rating: 4.0 },
    { id: 8, name: 'Angelfish', price: 650, discount: 6, image: 'https://cdn.shopifycdn.net/s/files/1/0595/5800/2887/files/clownfish_2f258448-1b78-44a0-9233-98e17c154474_480x480.jpg?v=1647677494', rating: 4.4 },
    { id: 9, name: 'Molly Fish', price: 200, discount: 7, image: 'https://cdn.shopifycdn.net/s/files/1/0595/5800/2887/files/clownfish_2f258448-1b78-44a0-9233-98e17c154474_480x480.jpg?v=1647677494', rating: 3.8 },
    { id: 10, name: 'Arowana', price: 8000, discount: 25, image: 'https://cdn.shopifycdn.net/s/files/1/0595/5800/2887/files/clownfish_2f258448-1b78-44a0-9233-98e17c154474_480x480.jpg?v=1647677494', rating: 4.9 },
    { id: 11, name: 'Carp Fish', price: 1100, discount: 10, image: 'https://cdn.shopifycdn.net/s/files/1/0595/5800/2887/files/clownfish_2f258448-1b78-44a0-9233-98e17c154474_480x480.jpg?v=1647677494', rating: 4.1 },
    { id: 12, name: 'Swordtail Fish', price: 250, discount: 5, image: 'https://cdn.shopifycdn.net/s/files/1/0595/5800/2887/files/clownfish_2f258448-1b78-44a0-9233-98e17c154474_480x480.jpg?v=1647677494', rating: 3.7 },
    { id: 13, name: 'Discus Fish', price: 3000, discount: 18, image: 'https://cdn.shopifycdn.net/s/files/1/0595/5800/2887/files/clownfish_2f258448-1b78-44a0-9233-98e17c154474_480x480.jpg?v=1647677494', rating: 4.6 },
    { id: 14, name: 'Lionfish', price: 5000, discount: 20, image: 'https://cdn.shopifycdn.net/s/files/1/0595/5800/2887/files/clownfish_2f258448-1b78-44a0-9233-98e17c154474_480x480.jpg?v=1647677494', rating: 4.8 },
    { id: 15, name: 'Parrot Fish', price: 1500, discount: 12, image: 'https://cdn.shopifycdn.net/s/files/1/0595/5800/2887/files/clownfish_2f258448-1b78-44a0-9233-98e17c154474_480x480.jpg?v=1647677494', rating: 4.2 },
    { id: 16, name: 'Catfish', price: 950, discount: 8, image: 'https://cdn.shopifycdn.net/s/files/1/0595/5800/2887/files/clownfish_2f258448-1b78-44a0-9233-98e17c154474_480x480.jpg?v=1647677494', rating: 4.0 },
    { id: 17, name: 'Rainbow Fish', price: 400, discount: 6, image: 'https://cdn.shopifycdn.net/s/files/1/0595/5800/2887/files/clownfish_2f258448-1b78-44a0-9233-98e17c154474_480x480.jpg?v=1647677494', rating: 4.3 },
    { id: 18, name: 'Puffer Fish', price: 1300, discount: 15, image: 'https://cdn.shopifycdn.net/s/files/1/0595/5800/2887/files/clownfish_2f258448-1b78-44a0-9233-98e17c154474_480x480.jpg?v=1647677494', rating: 4.5 },
    { id: 19, name: 'Shark Mini', price: 2200, discount: 10, image: 'https://cdn.shopifycdn.net/s/files/1/0595/5800/2887/files/clownfish_2f258448-1b78-44a0-9233-98e17c154474_480x480.jpg?v=1647677494', rating: 4.6 },
    { id: 20, name: 'Neon Tetra', price: 180, discount: 5, image: 'https://cdn.shopifycdn.net/s/files/1/0595/5800/2887/files/clownfish_2f258448-1b78-44a0-9233-98e17c154474_480x480.jpg?v=1647677494', rating: 3.9 },
  ];


  ngOnInit(): void { }

  addToCart(fish: any) {
    console.log('Fish added to cart:', fish);
  }

  removeFromCart(fish: any) {
    console.log('Fish removed from cart:', fish);
  }

  openDetails(fish: any) {
    console.log('Fish details:', fish);
  }

  deleteFish(id: number) {
    this.fishes = this.fishes.filter(f => f.id !== id);
    console.log('Deleted Fish ID:', id);
  }
}

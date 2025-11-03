import { Component, OnInit } from '@angular/core';
import { FishService } from '../../app/services/fish.service';
import { Fish } from '../../app/models/fish.model';
import { CommonModule, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgIf, NgFor],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  fishes: Fish[] = [];
  loading = false;
  error: string | null = null;

  constructor(private fishService: FishService) { }

  ngOnInit(): void {
    this.getFishesData();
  }


  getFishesData(): void {
    this.loading = true;
    this.error = null;
    this.fishService.getAll().subscribe({
      next: (res) => {
        this.fishes = res;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.error = 'Fishes load karte waqt error aaya';
        this.loading = false;
      }
    });
  }

  addDummyFish() {
    const payload: Partial<Fish> = { name: 'Naya Fish', discount: 10, price: 100, image: 'https://via.placeholder.com/150' };
    this.fishService.create(payload).subscribe({
      next: (created) => {
        this.fishes.unshift(created);
      },
      error: (e) => console.error(e)
    });
  }

  openDetails(fish: Fish) {
    console.log('Fish details:', fish);
  }
  deleteFish(id: number) {
    console.log('Delete fish with ID:', id);
    this.fishService.delete(id).subscribe({
      next: () => {
        this.fishes = this.fishes.filter(f => f.id !== id);
      },
      error: (err) => console.error('Error deleting fish:', err)
    });
  }

}
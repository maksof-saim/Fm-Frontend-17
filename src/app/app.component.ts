import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { CartComponent } from '../components/cart/cart.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, CartComponent, HttpClientModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Fm-Frontend-17';

  private http = inject(HttpClient); // HttpClient inject karo

  // Example: Get profile
  getProfile(token: string) {
    this.http.get('http://localhost:3000/profile', {
      headers: { Authorization: `Bearer ${token}` }
    }).subscribe({
      next: (res) => console.log(res),
      error: (err) => console.error(err)
    });
  }
}

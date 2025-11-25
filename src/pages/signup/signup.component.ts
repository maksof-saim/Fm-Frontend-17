// signup.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../../app/services/auth.service';
import { FormsModule, NgModel } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  imports: [
    FormsModule,
    RouterLink
  ],
  standalone: true
})
export class SignupComponent {

  name = '';
  email = '';
  password = '';

  constructor(private auth: AuthService) { }

  onSignup() {
    this.auth.register({
      name: this.name,
      email: this.email,
      password: this.password
    }).subscribe({
      next: (res) => {
        console.log("Signup success:", res);
        alert("User created successfully!");
      },
      error: (err) => {
        console.error(err);
        console.log(err);
        alert("Signup failed");
      }
    });
  }
}

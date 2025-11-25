import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../app/services/auth.service';
import { z } from 'zod';
import { NgIf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [FormsModule, NgIf, RouterLink],
})
export class LoginComponent {

  email = '';
  password = '';

  errors = {
    email: '',
    password: '',
    server: ''
  };

  // Zod Schema with professional messages
  loginSchema = z.object({
    email: z
      .string()
      .min(1, "Email is required")
      .email("Invalid email format"),

    password: z
      .string()
      .min(1, "Password is required")
      .min(6, "Password must be at least 6 characters long"),
  });

  constructor(private auth: AuthService, private router: Router) { }

  onLogin() {
    this.errors = { email: '', password: '', server: '' };

    const result = this.loginSchema.safeParse({
      email: this.email,
      password: this.password
    });

    if (!result.success) {
      const field = result.error.flatten().fieldErrors;

      this.errors.email = field.email?.[0] ?? '';
      this.errors.password = field.password?.[0] ?? '';

      return;
    }

    // Call API if Zod validation passes
    this.auth.login({
      email: this.email,
      password: this.password
    }).subscribe({
      next: (res) => {
        localStorage.setItem('token', res.token);
        alert("Login Successful!");
        this.router.navigate(['/home']);
      },
      error: (err) => {

        // Backend error professional messages
        if (err.error?.message === "Invalid password") {
          this.errors.server = "Incorrect password. Please try again.";
        }
        else if (err.error?.message === "User not found") {
          this.errors.server = "No account exists with this email address.";
        }
        else {
          this.errors.server = "Invalid email or password.";
        }
      }
    });
  }
}

// auth.service.ts
import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private apiUrl = environment.apiUrl; // Backend URL
    private platformId = inject(PLATFORM_ID);

    constructor(private http: HttpClient) { }

    // Signup
    signup(name: string, email: string, password: string): Observable<any> {
        return this.http.post(`${this.apiUrl}/signup`, { name, email, password });
    }

    // Login
    login(email: string, password: string): Observable<any> {
        return this.http.post(`${this.apiUrl}/login`, { email, password });
    }

    // Logout
    logout(token: string): Observable<any> {
        return this.http.post(`${this.apiUrl}/logout`, { token });
    }

    // Get profile (protected route)
    getProfile(token: string): Observable<any> {
        const headers = new HttpHeaders({
            Authorization: `Bearer ${token}`,
        });
        return this.http.get(`${this.apiUrl}/profile`, { headers });
    }

    // Save token in localStorage
    saveToken(token: string) {
        if (!isPlatformBrowser(this.platformId)) return;
        localStorage.setItem('jwtToken', token);
    }

    // Get token from localStorage
    getToken(): string | null {
        if (!isPlatformBrowser(this.platformId)) return null;
        return localStorage.getItem('jwtToken');
    }

    // Remove token
    removeToken() {
        if (!isPlatformBrowser(this.platformId)) return;
        localStorage.removeItem('jwtToken');
    }
}

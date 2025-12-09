// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private apiUrl = 'http://localhost:3000'; // Backend URL

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
        localStorage.setItem('jwtToken', token);
    }

    // Get token from localStorage
    getToken(): string | null {
        return localStorage.getItem('jwtToken');
    }

    // Remove token
    removeToken() {
        localStorage.removeItem('jwtToken');
    }
}

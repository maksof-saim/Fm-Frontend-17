// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private base = `${environment.apiUrl}/users`;

    constructor(private http: HttpClient) { }

    // SIGNUP
    register(data: { name: string; email: string; password: string }): Observable<any> {
        return this.http.post(`${this.base}/create`, data);
    }

    // LOGIN
    login(data: { email: string; password: string }): Observable<any> {
        return this.http.post(`${this.base}/login`, data);
    }
}

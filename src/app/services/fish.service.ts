import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environments';
import { Fish } from '../models/fish.model';

@Injectable({
  providedIn: 'root'
})
export class FishService {
  private base = `${environment.apiBaseUrl}`; // example route

  constructor(private http: HttpClient) { }

  getAll(params?: { [key: string]: any }): Observable<Fish[]> {
    let httpParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach(k => {
        if (params[k] !== undefined && params[k] !== null) {
          httpParams = httpParams.set(k, params[k]);
        }
      });
    }
    return this.http.get<Fish[]>(this.base + '/get', { params: httpParams });
  }

  getById(id: number): Observable<Fish> {
    return this.http.get<Fish>(`${this.base}/${id}`);
  }

  create(fish: Partial<Fish>): Observable<Fish> {
    return this.http.post<Fish>(this.base + '/create', fish);
  }

  // agar update ya delete chahiye to add kar lo
  update(id: number, fish: Partial<Fish>) {
    return this.http.put<Fish>(`${this.base}/${id}`, fish);
  }

  delete(id: number) {
    return this.http.delete(`${this.base}/${id}`);
  }
}

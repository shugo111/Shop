import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICart } from './../cart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private url: string = '/assets/cart.json';
  constructor(private http: HttpClient) {}
  getProducts(): Observable<ICart[]> {
    return this.http.get<ICart[]>(this.url);
  }
}

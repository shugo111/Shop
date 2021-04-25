import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICart } from '../cart';
import { IProduct } from '../product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: ICart[] = [];
  private totalItem: number = 0;
  private totalPrice: number = 0;
  private url: string = '/assets/cart.json';
  constructor(private http: HttpClient) {}
  getCart() {
    return this.cart;
  }
  getQuantity(id: number) {
    if (this.cart.find((x) => x.id === id)) {
      let index = this.cart.findIndex((x) => x.id === id);
      return this.cart[index].count;
    }
    return 0;
  }
  totalDetails() {
    this.totalPrice = 0;
    this.totalItem = 0;
    this.cart.map((x) => {
      this.totalPrice += x.total * x.count;
      this.totalItem += x.count;
    });
    return {
      price: this.totalPrice,
      item: this.totalItem,
    };
  }
  addToCart(item: IProduct) {
    if (this.cart.find((x) => x.id === item.id)) {
      let index = this.cart.findIndex((x) => x.id === item.id);
      this.cart[index].count += 1;
    } else {
      let temp: IProduct = item;
      let data: ICart = {
        id: item.id,
        count: 1,
        total: item.price,
        name: item.name,
      };
      this.cart.push(data);
    }
    return this.cart;
  }
  removeFromCart(item: IProduct) {
    if (this.cart.find((x) => x.id === item.id)) {
      let index = this.cart.findIndex((x) => x.id === item.id);
      this.cart[index].count -= 1;
      console.log(this.cart[index].count);
      if (this.cart[index].count === 0) {
        this.cart.splice(index, 1);
      }
    }
    return this.cart;
  }
  clearCart() {
    this.cart = [];
    this.totalPrice = 0;
    this.totalItem = 0;
    return this.cart;
  }
}

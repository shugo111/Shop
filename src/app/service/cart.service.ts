import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICart } from '../Models/cart';
import { IProduct } from 'src/app/Models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: ICart[] = [];
  private totalItem: number = 0;
  private totalPrice: number = 0;
  //private url: string = '/assets/cart.json';
  constructor(private http: HttpClient) {}
  private totalDetails() {
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

  private getItemIndex(id: number) {
    return this.cart.findIndex((x) => x.id === id);
  }
  getCart() {
    return {
      cart: this.cart,
      price: this.totalPrice,
      item: this.totalItem,
    };
  }

  getQuantity(id: number) {
    let index = this.getItemIndex(id);
    if (index > -1) {
      return this.cart[index].count;
    }
    return 0;
  }

  addToCart(item: IProduct) {
    let index = this.getItemIndex(item.id);
    if (index > -1) {
      this.cart[index].count += 1;
    } else {
      let data: ICart = {
        id: item.id,
        count: 1,
        total: item.price,
        name: item.name,
      };
      this.cart.push(data);
    }
    this.totalDetails();
    return {
      cart: this.cart,
      price: this.totalPrice,
      item: this.totalItem,
    };
  }
  removeFromCart(item: IProduct) {
    let index = this.getItemIndex(item.id);
    if (index > -1) {
      this.cart[index].count -= 1;
      if (this.cart[index].count === 0) {
        this.cart.splice(index, 1);
      }
    }
    this.totalDetails();
    return {
      cart: this.cart,
      price: this.totalPrice,
      item: this.totalItem,
    };
  }

  clearCart() {
    this.cart = [];
    this.totalPrice = 0;
    this.totalItem = 0;
    return this.cart;
  }
}

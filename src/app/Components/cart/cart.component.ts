import { Component, OnInit } from '@angular/core';
import { ICart } from 'src/app/Models/cart';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  constructor(private cartService: CartService) {}
  public cart: ICart[] = [];
  totalitem = { price: 0, item: 0 };
  clearCart() {
    this.cart = this.cartService.clearCart();
    this.totalitem = { price: 0, item: 0 };
  }
  getCart() {
    var temp = this.cartService.getCart();
    this.cart = temp.cart;
    this.totalitem = { price: temp.price, item: temp.item };
  }
  ngOnInit() {
    this.getCart();
  }
}

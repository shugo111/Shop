import { Component, OnInit } from '@angular/core';
import { ICart } from 'src/app/Models/cart';
import { IProduct } from 'src/app/Models/product';
import { CartService } from 'src/app/service/cart.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public cart: ICart[] = [];
  public products: IProduct[] = [];
  totalitem = { price: 0, item: 0 };
  searchText = '';

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  getProducts() {
    this.productService.getProducts().subscribe((response) => {
      this.products = response;
    });
  }
  addToCart(product: IProduct) {
    var temp = this.cartService.addToCart(product);
    this.cart = temp.cart;
    this.totalitem = { price: temp.price, item: temp.item };
  }
  getQuantity(id: number) {
    return this.cartService.getQuantity(id);
  }
  clearCart() {
    this.cart = this.cartService.clearCart();
    this.totalitem = { price: 0, item: 0 };
  }
  removeFromCart(product: IProduct) {
    var temp = this.cartService.removeFromCart(product);
    this.cart = temp.cart;
    this.totalitem = { price: temp.price, item: temp.item };
  }

  ngOnInit() {
    this.getProducts();
  }
}

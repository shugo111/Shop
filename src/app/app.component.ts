import { Component, Input } from '@angular/core';
import { ProductService } from './service/product.service';
import { IProduct } from './product';
import { ICart } from './cart';
import { CartService } from './service/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
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
  getProduct() {
    this.productService.getProduct('tomato').subscribe((response) => {});
  }
  addToCart(product: IProduct) {
    this.cart = this.cartService.addToCart(product);
    console.log(this.cart);
  }
  getQuantity(id: number) {
    return this.cartService.getQuantity(id);
  }
  totalDetails() {
    this.totalitem = this.cartService.totalDetails();

    return this.totalitem;
  }
  clearCart() {
    this.cart = this.cartService.clearCart();
    this.totalitem = { price: 0, item: 0 };
  }
  removeFromCart(product: IProduct) {
    this.cart = this.cartService.removeFromCart(product);
  }

  ngOnInit() {
    this.getProduct();
    this.getProducts();
  }
}

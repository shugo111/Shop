import { Component, Input } from '@angular/core';
import { ProductService } from './service/product.service';
import { IProduct } from './product';
import { ICart } from './cart';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public cart: ICart[] = [];
  public products: IProduct[] = [];
  searchText = '';
  addToCart(item: number) {
    if (this.cart.find((x) => x.id === item)) {
      let index = this.cart.findIndex((x) => x.id === item);
      this.cart[index].count += 1;
    } else {
      let temp: IProduct = this.products.find((x) => x.id === item) as IProduct;
      let data: ICart = { id: item, count: 1, total: temp.price };
      this.cart.push(data);
    }

    console.log(this.cart);
  }
  constructor(private service: ProductService) {}

  getProduct() {
    this.service.getProducts().subscribe((response) => {
      this.products = response;
    });
  }
  ngOnInit() {
    this.getProduct();
  }
}

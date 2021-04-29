import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from 'src/app/Models/product';
import { ICart } from '../../Models/cart';

@Component({
  selector: 'Card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  constructor() {}
  @Input() product: IProduct = { id: 0, name: '', price: 0, url: '' };
  @Input() cart: ICart[] = [];

  getQuantity() {
    let item = this.cart.find((x) => x.id === this.product.id);
  }
}

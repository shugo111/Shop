import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/Models/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}
  public product: IProduct = { id: 0, price: 0, name: '', url: '' };
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      console.log(params);
      let id = Number(params.get('id'));
      this.productService.getProduct(id).subscribe((x) => {
        if (typeof x === 'object') {
          this.product = x;
        }
      });
    });
  }
}

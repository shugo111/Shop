import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './../Components/cart/cart.component';

@NgModule({
  declarations: [CartComponent],
  imports: [CommonModule],
  exports: [CartComponent, CommonModule],
  bootstrap: [CartComponent],
})
export class CartModule {}

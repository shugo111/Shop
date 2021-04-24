import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'Card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  constructor() {
    this.name = '';
    this.price = 0;
    this.url = '';
  }
  @Input() name: string;
  @Input() price: number;
  @Input() url: string;

  ngOnInit(): void {}
}

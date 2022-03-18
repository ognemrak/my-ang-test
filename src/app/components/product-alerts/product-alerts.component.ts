import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  @Input() product!: Product;
  @Output() notify = new EventEmitter();

  minNotifyPrice = 700;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];

  constructor(
    private http: HttpClient
  ) {}

  /* Adds selected product to cart */
  public addToCart(product: Product) {
    this.items.push(product);
  }

  /* Gets products list that were added to cart */
  public getItems(): Product[] {
    return this.items;
  }

  public getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }

  /* Clears products that were added from cart */
  public clearCart(): Product[] {
    this.items = [];
    return this.items;
  }
}

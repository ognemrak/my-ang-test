import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();
  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  })

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    this.cartService.clearCart();
    window.alert('Your order has been submitted ' + this.checkoutForm.value.name + ' and ' + this.checkoutForm.value.address);
    this.checkoutForm.reset();
  }

}

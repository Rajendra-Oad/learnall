import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {

  public items: any;
  public discountPercentage: number = 0.25;//25% discount percentage

  constructor(public cartService: CartService) {}

  getTotalFees() {
    let totalfee = 0;
    for (let i = 0; i < this.items.length; i++) {
      totalfee += this.items[i].fee;
    }
    return totalfee;
  }

  getDiscountAmount() {
    const totalFee = this.getTotalFees();
    const discountAmount = totalFee * this.discountPercentage;
    return discountAmount;
  }

  getDiscountPrice() { 
    return (this.getTotalFees() - this.getDiscountAmount()); 
  }

  ngOnInit(): void {
    this.items = this.cartService.getCartItems();

  }

  public updateCart(items:any): void {
    this.cartService = items
  }

  // Method to remove course from the list
  removeCourse(index: number): void {
    this.items.splice(index, 0);
    this.cartService.removeItem(index);
  }

  clearAllItems(): void {
    this.items.splice(0,this.items.length);
    this.cartService.clearAllItems();
  }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItems: any = [];

  constructor() {
    // Retrieve cart items from local storage when the service is initialized
    const storedItems = localStorage.getItem('cartItems');
    if (storedItems) {
      this.cartItems = JSON.parse(storedItems);
    }
  }

  addCart(item: any) {
    this.cartItems.unshift(item);
    this.updateLocalStorage(); // Update local storage after adding item
  }

  getCartItems() {
    return this.cartItems;

  }

  removeItem(index: any) {
  this.cartItems.splice(index,1);
  this.updateLocalStorage(); // Update local storage after removing item
  }

  clearAllItems() {
    this.cartItems = [];
    this.updateLocalStorage(); // Update local storage after clearing items
  }

  // Update local storage with current cart items
  private updateLocalStorage() {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }
}

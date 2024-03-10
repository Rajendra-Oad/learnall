import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any = [];

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

  clearAllItems() {
    this.cartItems = [];
    this.updateLocalStorage(); // Update local storage after clearing items
  }

  // Update local storage with current cart items
  private updateLocalStorage() {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }
}

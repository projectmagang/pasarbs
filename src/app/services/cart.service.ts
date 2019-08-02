import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 
  private data = [
    {
      category: 'Buah',
      expanded: true,
      products: [
        { id: 0, name: 'Jambu Air', price: '8000' },
        { id: 1, name: 'Tomat', price: '5000' },
        { id: 2, name: 'Salak', price: '9000' },
        { id: 3, name: 'Semangka', price: '7000' }
      ]
    },
    {
      category: 'Sayur',
      products: [
        { id: 4, name: 'Pare', price: '8000' },
        { id: 5, name: 'Buncis', price: '6000' }
      ]
    },
    
  ];
 
  private cart = [];
 
  constructor() { }
 
  getProducts() {
    return this.data;
  }
 
  getCart() {
    return this.cart;
  }
 
  addProduct(product) {
    this.cart.push(product);
  }
}
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-card2',
  templateUrl: './card2.page.html',
  styleUrls: ['./card2.page.scss'],
})
export class Card2Page implements OnInit {

  selectedItems = [];
 
  total = 0;
 
  constructor(private cartService: CartService) { }
 
  ngOnInit() {
    let items = this.cartService.getCart();
    let selected = {};
    for (let obj of items) {
      if (selected[obj.id]) {
        selected[obj.id].count++;
      } else {
        selected[obj.id] = {...obj, count: 1};
      }
    }
    this.selectedItems = Object.keys(selected).map(key => selected[key])
    this.total = this.selectedItems.reduce((a, b) => a + (b.count * b.price), 0);
  }
 
}

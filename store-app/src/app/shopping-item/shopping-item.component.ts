import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../models/product.interface';


@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.css']
})
export class ShoppingItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public shoppingList: Array<Product> = []

  @Input() product: Product;
  @Input() itemIndex:number;
  

  //@Output() onDeleteFromList: EventEmitter<number> = new EventEmitter();
  @Output() onDeleteFromShoppingList: EventEmitter<number> = new EventEmitter();

  public deleteFromList(){
    this.onDeleteFromShoppingList.emit(this.product.id);
    console.log("Delete Button was Clicked");
  }

}

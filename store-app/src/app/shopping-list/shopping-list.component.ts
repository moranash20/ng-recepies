import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../models/product.interface';
import { Description } from '../models/product-type.enum';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(this.shoppingItems);
  }

  @Input() product: Product;
  @Input() productIndex: number;
  @Input() shoppingItems: Array<Product>
 
  @Output() onAddToShoppingList: EventEmitter<number> = new EventEmitter();
  @Output() onDeleteFromShoppingList: EventEmitter<number> = new EventEmitter();


  public addToShopppingList(id: number){
    this.onAddToShoppingList.emit(id);
    console.log("addToList() - shopping-list");
  }

  public deleteFromShoppingList(id: number){
    console.log("delete() - shopping-list");
    this.onDeleteFromShoppingList.emit(id);
    
  }


}

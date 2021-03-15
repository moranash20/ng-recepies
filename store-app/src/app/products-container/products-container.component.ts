import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


export interface Product{
  name: string;
  id: number;
  price: number;
  description: ProductDescription;
  imgUrl: string;
}

export enum ProductDescription{
  DryFood = "dry food",
  Cheese = "cheese",
  IceCream  = "ice cream"
}

@Component({
  selector: 'app-products-container',
  templateUrl: './products-container.component.html',
  styleUrls: ['./products-container.component.css']
})
export class ProductsContainerComponent implements OnInit {

  constructor() { }

    public listOfProducts: Product[] = [
      {
        name: "Pasta",
        id: 1,
        price: 5,
        description: ProductDescription.DryFood,
        imgUrl: ""
      },
      {
        name: "Yellow Cheese",
        id: 2,
        price: 5,
        description: ProductDescription.Cheese,
        imgUrl: ""
      },
      {
        name: "Ice Cream",
        id: 3,
        price: 5,
        description: ProductDescription.IceCream,
        imgUrl: ""
      }
  ];

  ngOnInit(): void {
  }
  
  @Input() product: Product;


  //@Output() onAddToShoppingList: EventEmitter<number> = new EventEmitter();  
  //@Output() onDeleteFromShoppingList: EventEmitter<number> = new EventEmitter();

 public shoppingList: Array<Product> = []

  public addProductToShoppingList(productIndex: number) {
      console.log(this.shoppingList);
      let res = (this.listOfProducts.find(obj => obj.id === productIndex))
      if (res){
        this.shoppingList.push(res);
        console.log( res);
        console.log("shoppingList"+this.shoppingList);
      }
      return this.shoppingList;
  }

  public deleteProductFromList(productIndex: number){
    console.log("shoppingList - productIndex:");
    console.log("delete " +productIndex);   
    console.log("DELETE");
    
    let res = (this.shoppingList.find(obj => obj.id === productIndex))
    console.log("productIndex"+productIndex);
    if (res){
    this.shoppingList = this.shoppingList.filter(obj => obj.id !== productIndex);
    }
    return this.shoppingList;
  }

}

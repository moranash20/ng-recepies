import { Component, EventEmitter, Input, OnInit, Output, AfterViewInit } from '@angular/core';
import {Product} from '../models/product.interface';
import {Description } from '../models/product-type.enum';
import { ProductService } from '../services/product.service';



/* export interface Product{
  name: string;
  id: number;
  price: number;
  description: ProductDescription;
  imgUrl: string;
} */

/* export enum ProductDescription{
  DryFood = "dry food",
  Cheese = "cheese",
  IceCream  = "ice cream"
} */

@Component({
  selector: 'app-products-container',
  templateUrl: './products-container.component.html',
  styleUrls: ['./products-container.component.css']
})

export class ProductsContainerComponent implements OnInit {

  constructor(private productService: ProductService) { }

  public products: Product[] = [];

    public listOfProducts: Product[] = [
      {
        name: "Pasta",
        id: 1,
        price: 5,
        description: Description.DryFood,
        imgUrl: ""
      },
      {
        name: "Yellow Cheese",
        id: 2,
        price: 5,
        description: Description.Cheese,
        imgUrl: ""
      },
      {
        name: "Ice Cream",
        id: 3,
        price: 5,
        description: Description.IceCream,
        imgUrl: ""
      }
  ];

  ngOnInit(): void {
    console.log("sevice: (ProductsContainer) " +this.productService.getProducts());
    this.productService.setProducts(this.listOfProducts);
    console.log("After (ProductsContainer) " +this.productService.getProducts());

    this.products = this.productService.getProducts();
  }

  ngAfterViewInit(){
    console.log('after ViewInit');
  }

  ngOnDestroy(): void{
    console.log('Destroy');
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

import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
//import { Product } from 'src/app/models/product.interface';

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
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
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
      id: 1,
      price: 5,
      description: ProductDescription.Cheese,
      imgUrl: ""
    },
    {
      name: "Ice Creame",
      id: 1,
      price: 5,
      description: ProductDescription.IceCream,
      imgUrl: ""
    }
];

  addToBuyList = []
  constructor(
  ) { }

  public addToList(product: Product) : void{
    this.addToBuyList.push();
    console.log(this.addToBuyList)
    console.log(product)
  }



  ngOnInit(): void {
  }



}

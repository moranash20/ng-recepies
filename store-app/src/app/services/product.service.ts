import { Injectable } from '@angular/core';
import { Product } from '../models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _product : Product[] = [];

  constructor() { }

  public getProducts(): Product[]{
    return this._product;
  }

  public setProducts(products: Product[]): void{
    this._product = [...this._product, ...products];
  }
}

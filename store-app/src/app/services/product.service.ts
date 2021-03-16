import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Product } from '../models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _product : Product[] = [];

  public productSubject$: Subject<Product> = new Subject();

  private productBehaviorSubject$: BehaviorSubject<Product> = new BehaviorSubject(null);

  constructor() { }

  public setProduct(product: Product){
    this.productSubject$.next(product);
  }

  public getProduct(): Observable<Product>{
    return this.productBehaviorSubject$.asObservable();
  }

  public getProducts(): Product[]{
    return this._product;
  }

  public setProducts(products: Product[]): void{
    this._product = [...this._product, ...products];
  }
}

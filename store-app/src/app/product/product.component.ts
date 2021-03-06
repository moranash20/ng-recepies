import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product, ProductDescription } from 'src/app/products/products.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})


export class ProductComponent implements OnInit {

  //addProductsList = []
  detailsStatus:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  get ProductDescriptionEnum(){
    return ProductDescription;
  }

  @Input() product!: Product;
  
  @Input() borderWidth!: number;

  @Input()
  productIndex!: number;

  @Output() onAddToList: EventEmitter<Product> = new EventEmitter();
  @Output() onDetails: EventEmitter<Product> = new EventEmitter();

  public addToList(){
    this.onAddToList.emit(this.product);
  }

  public productDetails(){
    this.detailsStatus = true;
    this.onDetails.emit(this.product);
    console.log(this.product);
  }

  


}

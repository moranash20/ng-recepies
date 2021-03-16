import { Component, Input, OnInit, Output } from '@angular/core';
import { from } from 'rxjs';
import { Product } from '../models/product.interface';



@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  
  constructor() { }

  ngOnInit(): void {
  }

  @Input() product: Product;
  @Input() productID: number;

  @Output() onProductDetails 

  showProductDetails(){
    return this.product;
  }

  
}

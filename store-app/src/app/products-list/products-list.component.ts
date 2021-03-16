import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../models/product.interface';
import { from } from 'rxjs';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit, AfterViewInit {
  

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    console.log("products: (ProductsList)" +this.productService);
  }

  ngAfterViewInit(){
    console.log("Products",this.productService.getProducts());
  }

  @Input() items: Array<Product>

  @Output() onAddToList: EventEmitter<number> = new EventEmitter();

  public addProductToList(id: number){
    console.log("productIndex:"+id)
    this.onAddToList.emit(id); 
  }


}

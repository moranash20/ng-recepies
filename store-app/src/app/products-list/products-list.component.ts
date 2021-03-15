import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/products-container/products-container.component';
import { from } from 'rxjs';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  

  constructor() { }

  ngOnInit(): void {
  }

  @Input() items: Array<Product>

  @Output() onAddToList: EventEmitter<number> = new EventEmitter();

  public addProductToList(id: number){
    console.log("productIndex:"+id)
    this.onAddToList.emit(id); 
  }


}

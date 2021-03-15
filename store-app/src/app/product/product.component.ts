import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product, ProductDescription, ProductsContainerComponent } from 'src/app/products-container/products-container.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})


export class ProductComponent implements OnInit {

  detailsStatus:boolean = false;


  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  get ProductDescriptionEnum(){
    return ProductDescription;
  }

  @Input() product: Product;
  @Input() productID: number;

  @Output() onAddToList: EventEmitter<number> = new EventEmitter();
  @Output() onDetails: EventEmitter<Product> = new EventEmitter();

  public addToList(){
    this.onAddToList.emit(this.product.id);
    console.log("addToList()  - product", this.product.id);
  }

  public productDetails(){
    this.detailsStatus = true;
    this.onDetails.emit(this.product);  
    console.log("details");
  }

  onBack(): void {
    this.router.navigate(['products']);
  }

  


}

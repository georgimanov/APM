import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']  
})
export class ProductListComponent implements OnInit {
  
  _listFilter: string;

  errorMessage: string;
  pageTitle: string = 'Product List Components title';
  showImage: boolean = false;
  products: IProduct[] = [];
  filteredProducts: IProduct[] = [];
  
  constructor(private _productService : ProductService){
    this.listFilter = '';
  }  

  ngOnInit(): void {
    this._productService.getProducts()
    .subscribe(products => {
        this.products = products;
        this.filteredProducts = this.products;
    },
    error => this.errorMessage = <any>error);
  }

  get listFilter(): string {
    return this._listFilter;
  }
  
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }
    
  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
 
  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;  
  }
}
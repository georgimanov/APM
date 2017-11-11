import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']  
})
export class ProductListComponent implements OnInit {
  
  _listFilter: string;

  pageTitle: string = 'Product List Components title';
  showImage: boolean = false;
  products: IProduct[] = [];
  filteredProducts: IProduct[] = [];
  
  constructor(private _productService : ProductService){
    this.listFilter = '';
  }  

  ngOnInit(): void {
    this.products = this._productService.getProducts();
    this.filteredProducts = this.products;
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
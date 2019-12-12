import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'cq-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = true;
  private _listFilter: string;
  filteredProducts: Product[];
  products: Product[];

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;
  }

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ?
      this.performFilter(this.listFilter) :
      this.products;
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }

  private performFilter(listFilter: string): Product[] {
    const filteredBy = listFilter.toLocaleLowerCase();
    return this.products.filter((product: Product) => product.productName.toLocaleLowerCase().includes(filteredBy));
  }

  onRatingClicked($event: string) {
    this.pageTitle = $event;
  }
}

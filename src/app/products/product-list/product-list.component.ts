import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Product } from '../product';
import { ProductService } from '../product.service';
import {
  InitializeCurrentProduct,
  Load,
  SetCurrentProduct,
  ToggleProductCode
} from '../state/product.actions';
import {
  getCurrentProduct,
  getError,
  getProducts,
  hasShowProductCode,
  State
} from '../state/product.reducer';

@Component({
  selector: 'cq-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  pageTitle = 'Products';

  displayCode: boolean;

  products: Product[];

  // Used to highlight the selected product in the list
  selectedProduct: Product | null;

  products$: Observable<Product[]>;
  errorMessage$: Observable<string>;

  constructor(private productService: ProductService, private store: Store<State>) { }

  ngOnInit(): void {
    this.store.pipe(select(getCurrentProduct))
      .subscribe(currentProduct => this.selectedProduct = currentProduct);

    this.errorMessage$ = this.store
      .pipe(select(getError));
    this.store.dispatch(new Load());
    this.products$ = this.store.pipe(select(getProducts));

    this.store
      .pipe(select(hasShowProductCode))
      .subscribe(productCode => this.displayCode = productCode);
  }

  ngOnDestroy(): void {
  }

  checkChanged(value: boolean): void {
    this.store.dispatch(new ToggleProductCode(value));
  }

  newProduct(): void {
    this.store.dispatch(new InitializeCurrentProduct());
  }

  productSelected(product: Product): void {
    this.store.dispatch(new SetCurrentProduct(product));
  }
}

import { ChangeDetectionStrategy } from '@angular/core';
import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ProductService } from '../product.service';

@Component({
  selector: 'cq-product-detail',
  templateUrl: './product-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailComponent {
  pageTitle = 'Product Detail';
  private errorMessageSubject: Subject<string> = new Subject<string>();
  errorMessage$ = this.errorMessageSubject.asObservable();
  product;

  product$ = this.productService.selectedProduct$
    .pipe(
      catchError(err => {
        this.errorMessageSubject.next(err);
        return EMPTY;
      })
    );

  constructor(private productService: ProductService) { }

}

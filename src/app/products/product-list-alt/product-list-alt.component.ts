import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Subject } from 'rxjs';
import { EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ProductService } from '../product.service';

@Component({
  selector: 'cq-product-list',
  templateUrl: './product-list-alt.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListAltComponent {
  pageTitle = 'Products';
  private errorMessageSubect: Subject<string> = new Subject<string>();
  errorMessage$ = this.errorMessageSubect.asObservable();

  products$ = this.productService.productsWithCategory$
    .pipe(
      catchError(err => {
        this.errorMessageSubect.next(err);
        return EMPTY;
      })
    );

  selectedProduct$ = this.productService.selectedProduct$;

  constructor(private productService: ProductService) { }

  onSelected(productId: number): void {
    this.productService.selectedProductChanged(productId);
  }
}

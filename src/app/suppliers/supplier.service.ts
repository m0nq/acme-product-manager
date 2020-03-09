import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';
import {
  catchError,
  concatMap,
  map,
  mergeMap,
  shareReplay,
  switchMap,
  tap
} from 'rxjs/operators';
import { Supplier } from './supplier';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  suppliersUrl = 'api/suppliers';

  suppliers$ = this.http.get<Supplier[]>(this.suppliersUrl)
    .pipe(
      tap(data => console.log('suppliers ->', data)),
      shareReplay(1),
      catchError(this.handleError)
    );

  suppliersWithMap$ = of(1, 5, 8)
    .pipe(
      tap(id => console.log(`map source Observable ${id}`)),
      map(id => this.http.get<Supplier>(`${this.suppliersUrl}/${id}`))
    );

  suppliersWithConcatMap$ = of(1, 5, 8)
    .pipe(
      tap(id => console.log(`concatMap source observable -> ${id}`)),
      concatMap(id => this.http.get<Supplier>(`${this.suppliersUrl}/${id}`))
    );

  supplierWithMergeMap$ = of(1, 5, 8)
    .pipe(
      tap(id => console.log(`mergeMap source Observable -> ${id}`)),
      mergeMap(id => this.http.get<Supplier>(`${this.suppliersUrl}/${id}`))
    );

  supplierWithSwitchMap$ = of(1, 5, 8)
    .pipe(
      tap(id => console.log(`switchMap source Observable -> ${id}`)),
      switchMap(id => this.http.get<Supplier>(`${this.suppliersUrl}/${id}`))
    );

  constructor(private http: HttpClient) {
  }

  private handleError(err: any) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}

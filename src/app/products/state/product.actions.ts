import { Action } from '@ngrx/store';
import { Product } from '../product';

export enum ProductActionTypes {
  ToggleProductCode = '[Product] Toggle Product Code',
  SetCurrentProduct = '[Product] Set Current Product',
  ClearCurrentProduct = '[Product] Clear Current Product',
  InitializeCurrentProduct = '[Product] Initialize Current Product',
  Load = '[Product] Load',
  LoadSuccess = '[Product] Load Success',
  LoadFail = '[Product] Load Fail'
}

export class ToggleProductCode implements Action {
  type: string = ProductActionTypes.ToggleProductCode;

  constructor(public payload: boolean) {}
}

export class SetCurrentProduct implements Action {
  type: string = ProductActionTypes.SetCurrentProduct;

  constructor(public payload: Product) {}
}

export class ClearCurrentProduct implements Action {
  type: string = ProductActionTypes.ClearCurrentProduct;

  constructor(public payload = null) {}
}

export class InitializeCurrentProduct implements Action {
  type: string = ProductActionTypes.InitializeCurrentProduct;

  constructor(public payload = null) {}
}

export class Load implements Action {
  type: string = ProductActionTypes.Load;

  constructor(public payload = null) {}
}

export class LoadSuccess implements Action {
  type: string = ProductActionTypes.LoadSuccess;

  constructor(public payload: Product[]) {}
}

export class LoadFail implements Action {
  type: string = ProductActionTypes.LoadFail;

  constructor(public payload: string) {}
}

export type ProductActions = ToggleProductCode
  | SetCurrentProduct
  | ClearCurrentProduct
  | InitializeCurrentProduct
  | Load
  | LoadSuccess
  | LoadFail;

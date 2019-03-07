import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Store } from '../store/store';
import { TransactionService } from '../transaction/transaction.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private _products = new BehaviorSubject(Store.PRODUCTS);
  products$ = this._products.asObservable();

  constructor(private _transactionService : TransactionService) { }

  attemptPurchase(id : number){
    var successful = this._transactionService.attemptPurchase(this._products.value.find(x=>x.id == id).price);

    if(successful === true)  this.removeQuantity(id);
  }

  private removeQuantity(id : number){
    const clonedProducts  = Object.assign([], this._products.value);
    clonedProducts.find(x=>x.id == id).quantity -= 1;
    this._products.next(clonedProducts);    
  }

}

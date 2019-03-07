import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Coin } from '../models/coin';
import { CoinConstants } from '../constants/coinConstants';
import { MatSnackBar } from '@angular/material';
import { AppComponent } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private _currentAmount = new BehaviorSubject<number>(0);
  currentAmount$ = this._currentAmount.asObservable();

  private _changeAmount = new BehaviorSubject<number>(0);
  changeAmount$ = this._changeAmount.asObservable();

  constructor(private _snackBar: MatSnackBar) { }

  insertCoin(coin: Coin) {
    if (this.isAcceptedCoin(coin)) {
      this.sendSnackbarMessage('Coin Added',true);
      this._currentAmount.next(this._currentAmount.value + coin.value);}
    else {
      this.sendSnackbarMessage('Coin Not Accepted',false);
      this._changeAmount.next(this._changeAmount.value + coin.value);
    }
  }

  private isAcceptedCoin(coin: Coin) {
    if (CoinConstants.ACCEPTED_COINS.includes(coin.value)) return true;
    return false;
  }

  refund() {
    if( this._currentAmount.value === 0) {
      this.sendSnackbarMessage('No Money To Refund',false);
      return;
    }
    this.sendSnackbarMessage('Money Refunded',true);
    this._changeAmount.next(this._changeAmount.value + this._currentAmount.value);
    this._currentAmount.next(0);
  }

  collectChange() {
    if( this._changeAmount.value === 0) {
      this.sendSnackbarMessage('No Money To Collect',false);
      return;
    }
    this.sendSnackbarMessage('Change Collected',true);
    this._changeAmount.next(0);
  }

  attemptPurchase(price : number) : boolean {
    let currentAmount = this._currentAmount.value;
    if(currentAmount >= price) {
      this._currentAmount.next(currentAmount - price);
      this.sendSnackbarMessage('Product Purchased',true);
      return true;
    }

    this.sendSnackbarMessage('Insert More Money',false);
    return false;
  }

  private sendSnackbarMessage(message : string, isSuccessful : boolean){
    let className = 'failed';
    if(isSuccessful === true) className = 'success';
    
    this._snackBar.open(message, '', {
      duration: 2000,
      panelClass: [ className ]
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { CoinConstants } from '../constants/coinConstants';
import { TransactionService } from '../transaction/transaction.service';
import { Coin } from '../models/coin';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.scss']
})
export class CoinsComponent implements OnInit {

  validAmounts = CoinConstants.VALID_COINS;

  constructor(private _transactionService : TransactionService) { }

  ngOnInit() {
  }

  insertCoin(value : number){
    this._transactionService.insertCoin(new Coin(value));
  }
}

import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs/internal/observable/of';
import { TransactionService } from 'src/app/transaction/transaction.service';
import { Coin } from '../models/coin';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  currentAmount$ = this._transactionService.currentAmount$;

  constructor(private _transactionService : TransactionService) { }

  ngOnInit() {
  }

}

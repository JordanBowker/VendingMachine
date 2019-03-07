import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction/transaction.service';

@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.scss']
})
export class ChangeComponent implements OnInit {

  changeAmount$ = this._transactionService.changeAmount$;

  constructor(private _transactionService : TransactionService) { }

  ngOnInit() {
  }

  collectChange(){
    this._transactionService.collectChange();
  }

}

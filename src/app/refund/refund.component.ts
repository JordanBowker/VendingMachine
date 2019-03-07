import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction/transaction.service';

@Component({
  selector: 'app-refund',
  templateUrl: './refund.component.html',
  styleUrls: ['./refund.component.scss']
})
export class RefundComponent implements OnInit {

  constructor(private _transactionService: TransactionService) { }

  ngOnInit() {
  }

  refund() {
    this._transactionService.refund();
  }

}

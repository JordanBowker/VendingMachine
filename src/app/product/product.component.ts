import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from '../products/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() id : number;
  @Input() name : string;
  @Input() quantity : string;
  @Input() price : number;
 
  constructor(private _productsService : ProductsService) { }

  ngOnInit() {
  }

  attemptPurchase(id : number){
    this._productsService.attemptPurchase(id);
  }
}

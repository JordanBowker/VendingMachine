import { throwError } from 'rxjs';
import { CoinConstants } from '../constants/coinConstants';

export class Coin {

    value: number;

    constructor(value : number) {
        if(!CoinConstants.VALID_COINS.includes(value)) throw new Error("Invalid Coin");

        this.value = value;
    }   

}
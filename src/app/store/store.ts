import { Product } from '../models/product';

export class Store {
    public static PRODUCTS = [
        new Product(1,'Crisps', 0.6, 2),
        new Product(2,'Twix', 0.55, 1),
        new Product(3,'Mars', 0.5, 0),
        new Product(4,'Fanta', 1.10, 5),
    ]
}
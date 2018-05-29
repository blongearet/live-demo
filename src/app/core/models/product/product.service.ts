import {Injectable} from '@angular/core';
import {Product} from './product'

export interface IProduct {
  id: number;
  productName: string;
  productCode: string;
  releaseDate: Date;
  price: number;
  description: string;
  starRating: number;
  imageUrl: string;
  emoji: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    new Product({
      id: 1,
      productName: 'Unicorn',
      productCode: 'AEJFYBNF',
      imageUrl: 'https://m.popkey.co/e229ad/xEZQM.gif'
    }),
    new Product({
      id: 2,
      productName: 'Rocket',
      productCode: 'IUHNFFJ',
      price: 2,
      imageUrl: 'https://m.popkey.co/b0947f/RXKAk.gif',
      emoji: '🦄'
    }),
    new Product({
      id: 3,
      productName: 'Happuy',
      productCode: 'KKEHCGFV',
      price: 2,
      imageUrl: 'https://m.popkey.co/527299/MwREL.gif',
      emoji: '🦄'
    })
  ]

  constructor() {
  }

  public getProducts(): Product[] {
    return this.products
  }

  public getProductByCode(code: string): Product {
    return this.getProductBy('productCode', code)
  }

  public getProductById(id: number): Product {
    return this.getProductBy('id', id)
  }

  private getProductBy(key: keyof Product, value: any): Product {
    return this.products.find((product: Product) => product[key] === value)
  }

}

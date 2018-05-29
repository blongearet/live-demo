import { Injectable } from '@angular/core';

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

  private products: IProduct[] = [
    {
      id: 1,
      productName: 'Unicorn',
      productCode: 'AEJFYBNF',
      price: 2,
      description: '',
      starRating: 2,
      imageUrl: 'https://m.popkey.co/e229ad/xEZQM.gif',
      emoji: '🦄',
      releaseDate: new Date()
    },
    {
      id: 2,
      productName: 'Rocket',
      productCode: 'IUHNFFJ',
      price: 2,
      description: '',
      starRating: 5,
      imageUrl: 'https://m.popkey.co/b0947f/RXKAk.gif',
      emoji: '🦄',
      releaseDate: new Date()
    },
    {
      id: 3,
      productName: 'Happuy',
      productCode: 'KKEHCGFV',
      price: 2,
      description: '',
      starRating: 1,
      imageUrl: 'https://m.popkey.co/527299/MwREL.gif',
      emoji: '🦄',
      releaseDate: new Date()
    }
  ]

  constructor() { }

  public getProducts(): IProduct[] {
    return this.products
  }

  public getProductById(id: number): IProduct {
    return this.products.find((product: IProduct) => product.id === id)
  }

}

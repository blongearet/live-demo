import {Component} from '@angular/core'
import {PageEvent} from '@angular/material'
import {StarRatingComponentType} from "../../../core/components/star-rating/star-rating.component";

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

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {

  public StarRatingComponentType: typeof StarRatingComponentType = StarRatingComponentType
  public pageSize: number = 7
  public currentPage: number = 0

  public displayedProduct: IProduct[] = []

  public products: IProduct[] = [
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

  public constructor() {
    this.buildDisplayedProduct()
  }


  public buildDisplayedProduct(pageEvent?: PageEvent): void {
    const pageIndex = pageEvent ? pageEvent.pageIndex : 0
    const start = pageIndex * this.pageSize
    const end = (pageIndex + 1) * this.pageSize - 1
    this.displayedProduct = this.products.slice(start, end)
  }

  public onRate(product: IProduct, rate: number): void {
    product.starRating = rate
  }
}

import {Component} from '@angular/core'
import {PageEvent} from '@angular/material'
import {StarRatingComponentType} from "../../../core/components/star-rating/star-rating.component";
import {IProduct, ProductService} from "../../../core/models/product/product.service";

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

  public constructor(public productService: ProductService) {
    this.buildDisplayedProduct()
  }


  public buildDisplayedProduct(pageEvent?: PageEvent): void {
    const pageIndex = pageEvent ? pageEvent.pageIndex : 0
    const start = pageIndex * this.pageSize
    const end = (pageIndex + 1) * this.pageSize - 1
    this.displayedProduct = this.productService.getProducts().slice(start, end)
  }

  public onRate(product: IProduct, rate: number): void {
    product.starRating = rate
  }

}

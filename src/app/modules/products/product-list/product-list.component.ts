import {Component} from '@angular/core'
import {PageEvent} from '@angular/material'
import {StarRatingComponentType} from "../../../core/components/star-rating/star-rating.component";
import {ProductService} from "../../../core/models/product/product.service";
import {BehaviorSubject, combineLatest, Observable} from "rxjs";
import {Product} from "../../../core/models/product/product";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {

  public StarRatingComponentType: typeof StarRatingComponentType = StarRatingComponentType
  public products$: Observable<Product[]>
  public productsPaginated$: Observable<Product[]>
  public paginatorConfig$: BehaviorSubject<PageEvent> = new BehaviorSubject<PageEvent>({
    pageSize: 5,
    pageIndex: 0,
    previousPageIndex: 0,
    length: 0
  })

  public constructor(productService: ProductService) {

    this.products$ = productService.getProducts()

    this.productsPaginated$ = combineLatest(
        this.products$,
        this.paginatorConfig$,
        (products: Product[], paginatorConfig: PageEvent) => {
          const { pageIndex, pageSize } = paginatorConfig
          const start = pageIndex * pageSize
          const end = (pageIndex + 1) * pageSize
          return products.slice(start, end)
        }
      )

  }

  public onPageEvent(pageEvent?: PageEvent): void {
    this.paginatorConfig$.next(pageEvent)
  }

  public onRate(product: Product, rate: number): void {
    product.starRating = rate
  }

}

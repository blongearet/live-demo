import { Component, OnInit } from '@angular/core';
import {StarRatingComponentType} from "../../../core/components/star-rating/star-rating.component";
import {Observable} from "rxjs";
import {Product} from "../../../core/models/product/product";
import {ProductService} from "../../../core/models/product/product.service";

@Component({
  selector: 'app-product-list-simple',
  templateUrl: './product-list-simple.component.html',
  styleUrls: ['./product-list-simple.component.css']
})
export class ProductListSimpleComponent {

  public StarRatingComponentType: typeof StarRatingComponentType = StarRatingComponentType
  public products$: Observable<Product[]>

  constructor(productService: ProductService) {
    this.products$ = productService.getProducts()
  }

  public onRate(product: Product, rate: number): void {
    product.starRating = rate
  }

}

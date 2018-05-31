import {Component} from '@angular/core';
import {ProductService} from "../../../core/models/product/product.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Observable} from "rxjs";
import {catchError, map, switchMap} from "rxjs/internal/operators";
import {Product} from "../../../core/models/product/product";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {

  public product$: Observable<Product | boolean>

  constructor(public productService: ProductService, route: ActivatedRoute, router: Router) {
    this.product$ = route.paramMap.pipe(
      map((params: ParamMap) => Number(params.get('id'))),
      switchMap((id: number) => {
        return this.productService.getProductById(id).pipe(
          catchError((errorMessage: string) => {
            console.error(errorMessage)
            return router.navigate(['/products'])
          })
        )
      }),
    )
  }

}

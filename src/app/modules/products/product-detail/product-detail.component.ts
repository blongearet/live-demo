import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../../core/models/product/product.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(public productService: ProductService) { }

  ngOnInit() {
  }

}

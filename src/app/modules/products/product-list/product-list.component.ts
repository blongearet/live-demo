import {Component} from '@angular/core'
import {PageEvent} from '@angular/material'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {

  public pageSize: number = 7
  public currentPage: number = 0

  public displayedProduct: any[] = []

  public products: any[] = [
    {
      id: 1,
      name: 'Unicorn',
      emoji: '🦄',
      date: new Date()
    },
    {
      id: 2,
      name: 'Boom',
      emoji: '💥',
      date: new Date()
    },
    {
      id: 3,
      name: 'Rocket',
      emoji: '🚀',
      date: new Date()
    },
    {
      id: 4,
      name: 'Rocket',
      emoji: '🚀',
      date: new Date()
    },
    {
      id: 5,
      name: 'Rocket',
      emoji: '🚀',
      date: new Date()
    },
    {
      id: 6,
      name: 'Rocket',
      emoji: '🚀',
      date: new Date()
    },
    {
      id: 7,
      name: 'Rocket',
      emoji: '🚀',
      date: new Date()
    },
    {
      id: 8,
      name: 'Rocket',
      emoji: '🚀',
      date: new Date()
    },
    {
      id: 9,
      name: 'Rocket',
      emoji: '🚀',
      date: new Date()
    },
    {
      id: 10,
      name: 'Rocket',
      emoji: '🚀',
      date: new Date()
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

}

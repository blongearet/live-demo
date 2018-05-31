import {Injectable} from '@angular/core';
import {IProduct, Product} from './product'
import {BehaviorSubject, Observable} from 'rxjs'
import {map} from 'rxjs/internal/operators'
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([])
  private products$: Observable<Product[]>
  private syncInProgress: boolean = false

  constructor(private http: HttpClient) {
    this.products$ = this.products.asObservable()
  }

  public getProducts(): Observable<Product[]> {
    this.syncProducts()
    return this.products$
  }

  public getProductByCode(code: string): Observable<Product> {
    return this.getProductBy('productCode', code)
  }

  public getProductById(id: number): Observable<Product> {
    return this.getProductBy('id', id)
  }

  private getProductBy(key: keyof Product, value: any): Observable<Product> {
    this.syncProducts()
    return this.products$
      .pipe(
        map((products: Product[]): Product => {
          const currentProduct = products.find((product: Product) => product[key] === value)
          if (currentProduct === undefined) {
            throw new Error('Doesnt exist')
          }
          return currentProduct
        })
      )
  }

  private syncProducts() {
    if (this.syncInProgress) {
      return;
    }

    this.syncInProgress = true
    this.http
      .get<IProduct[]>('http://localhost:3000/products')
      .subscribe((products: IProduct[]) => {
        this.syncInProgress = false
        const modelProducts = products.map(product => new Product(product))
        this.updateState(modelProducts)
      })
  }

  private updateState(products: Product[]) {
    this.products.next(products)
  }

}

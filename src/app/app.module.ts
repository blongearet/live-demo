import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'

import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatMenuModule} from '@angular/material/menu'
import {MatIconModule} from '@angular/material/icon'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatListModule} from '@angular/material/list'
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatCardModule} from '@angular/material/card'
import {MatPaginatorModule} from '@angular/material/paginator'
import {MatInputModule} from '@angular/material/input'
import {WelcomeComponent} from './modules/welcome/welcome.component'
import {ProductsComponent} from './modules/products/products.component'
import {ProductListComponent} from './modules/products/product-list/product-list.component'
import {ProductDetailComponent} from './modules/products/product-detail/product-detail.component'
import {ProductEditComponent} from './modules/products/product-edit/product-edit.component'
import {ReversePipe} from './core/pipes/reverse.pipe';
import {MomentPipe} from './core/pipes/moment.pipe';
import {StarRatingComponent} from './core/components/star-rating/star-rating.component';
import {ToolsComponent} from './core/tools/tools.component'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {ProductService} from './core/models/product/product.service'

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProductsComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ReversePipe,
    MomentPipe,
    StarRatingComponent,
    ToolsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatPaginatorModule,
    MatSidenavModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

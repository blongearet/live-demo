import {ProductDetailComponent} from './modules/products/product-detail/product-detail.component';
import {ProductEditComponent} from './modules/products/product-edit/product-edit.component';
import {ProductsComponent} from './modules/products/products.component';
import {WelcomeComponent} from './modules/welcome/welcome.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './modules/products/product-list/product-list.component';
import {ToolsComponent} from "./core/tools/tools.component";
import {ProductListSimpleComponent} from "./modules/products/product-list-simple/product-list-simple.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: WelcomeComponent
  },
  {
    path: 'products',
    component: ProductsComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: ProductListComponent
      },
      {
        path: 'simple',
        pathMatch: 'full',
        component: ProductListSimpleComponent
      },
      {
        path: ':id',
        component: ProductDetailComponent
      },
      {
        path: ':id/edit',
        component: ProductEditComponent
      }
    ]
  },
  {
    path: 'tools',
    component: ToolsComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

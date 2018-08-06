import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./components/pages/login/login.component";
import {CategoryListComponent} from "./components/pages/category/category-list/category-list.component";
import {AuthGuard} from "./guards/auth.guard";
import {ProductCategoryListComponent} from "./components/pages/product-category/product-category-list/product-category-list.component";
import {ProductListComponent} from "./components/pages/product/product-list/product-list.component";
import {UserListComponent} from "./components/pages/user/user-list/user-list.component";

const routes: Routes = [
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'categories/list',
        component: CategoryListComponent,
        canActivate: [AuthGuard]
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'products/:product/categories/list',
        component: ProductCategoryListComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'products/list',
        component: ProductListComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'users/list',
        component: UserListComponent,
        canActivate: [AuthGuard]
    },
]


@NgModule({
  imports: [
      RouterModule.forRoot(routes, {enableTracing: true}),
  ],
  declarations: [],
    exports: [
      RouterModule
    ],
    providers: [
        AuthGuard
    ]
})
export class AppRoutingModule { }
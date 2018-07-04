import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/pages/login/login.component';
//import { CategoryListComponent } from './components/pages/category/category-list/category-list.component';
import {AlertErrorComponent} from "./components/bootstrap/alert-error/alert-error.component";
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import { ModalComponent } from './components/bootstrap/modal/modal.component';
import { CategoryNewModalComponent } from './components/pages/category/category-new-modal/category-new-modal.component';
<<<<<<< HEAD
import {CategoryListComponent} from "./components/pages/category/category-list/category-list.component";
=======
>>>>>>> c1e6900706a07923a88a7961e2838fdabf045487



const routes: Routes = [
    {
      path: 'login', component: LoginComponent
    },
    {
      path: 'categories/list', component: CategoryListComponent
    },
    { // definindo o login como padrão se estiver vasio
      path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CategoryListComponent,
<<<<<<< HEAD
    AlertErrorComponent,
    ModalComponent,
    CategoryNewModalComponent
=======
      AlertErrorComponent,
      ModalComponent,
      CategoryNewModalComponent
>>>>>>> c1e6900706a07923a88a7961e2838fdabf045487
  ],
  imports: [
    BrowserModule,
      FormsModule,
      HttpClientModule,
      RouterModule.forRoot(routes, {enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

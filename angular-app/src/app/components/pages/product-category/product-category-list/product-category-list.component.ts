import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductHttpService} from "../../../../services/http/product-http.service";
import {Product, ProductCategory} from "../../../../Models";
import {ProductCategoryHttpService} from "../../../../services/http/product-category-http.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-product-category-list',
  templateUrl: './product-category-list.component.html',
  styleUrls: ['./product-category-list.component.css']
})
export class ProductCategoryListComponent implements OnInit {

  productid: number;
  product: Product = null;
  productCategory: ProductCategory = null;

  constructor(private route: ActivatedRoute,
              private productHttp: ProductHttpService,
              private productCategoryHttp: ProductCategoryHttpService

              ) {

  }



  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productid = params.product;
      this.getProduct();
      this.getProductCategory();
    });
  }


  getProduct(){
    this.productHttp.get(this.productid)
        .subscribe(product => this.product = product);
  }


    onInsertError($event: HttpErrorResponse) {
        console.log($event);
    }


    onInsertSucess($event: ProductCategory) {
        //this.notifyMessage.success('Categoria cadastrada com sucesso!');
        this.getProductCategory();
    }

    getProductCategory(){
        this.productCategoryHttp
            .list(this.productid)
            .subscribe(productCategory => {
                this.productCategory = productCategory;
                console.log(this.productCategory);
            } )
    }
}

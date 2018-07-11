import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductHttpService} from "../../../../services/http/product-http.service";
import {Category, Product, ProductCategory} from "../../../../Models";
import {ProductCategoryHttpService} from "../../../../services/http/product-category-http.service";
import {CategoryHttpService} from "../../../../services/http/category-http.service";

@Component({
  selector: 'app-product-category-list',
  templateUrl: './product-category-list.component.html',
  styleUrls: ['./product-category-list.component.css']
})
export class ProductCategoryListComponent implements OnInit {

  productid: number;
  product: Product = null;
  productCategory: ProductCategory = null;
  categories: Category[] = [];
  categoriesid: number[] = [];

  constructor(private route: ActivatedRoute,
              private productHttp: ProductHttpService,
              private productCategoryHttp: ProductCategoryHttpService,
              private categoryHttp: CategoryHttpService) {

  }



  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getCategories();
      this.productid = params.product;
      this.getProduct();
      this.getProductCategory();
    });
  }

  change(){
    console.log(this.categoriesid);
  }

  getCategories(){
      this.categoryHttp.list(1)
          .subscribe(response => {
              this.categories = response.data;
          })


  }

  getProduct(){
    this.productHttp.get(this.productid)
        .subscribe(product => this.product = product);
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

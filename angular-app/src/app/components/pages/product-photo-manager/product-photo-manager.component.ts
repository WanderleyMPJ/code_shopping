import { Component, OnInit } from '@angular/core';
import {Product, ProductPhoto} from "../../../Models";
import {ProductPhotoHttpService} from "../../../services/http/product-photo-http.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'product-photo-manager',
  templateUrl: './product-photo-manager.component.html',
  styleUrls: ['./product-photo-manager.component.css']
})

export class ProductPhotoManagerComponent implements OnInit {

  photos: ProductPhoto[] = [];
  product : Product = null;
  productId : number;

  constructor(private productPhotoHttp: ProductPhotoHttpService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productId = params.product;
      this.getPhotos();
    });
  }

  getPhotos(){
    this.productPhotoHttp
        .list(this.productId)
        .subscribe(data => {
          this.photos = data.photos;
          this.product = data.product;
        });
  }

}

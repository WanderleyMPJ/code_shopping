import {Component, OnInit, ViewChild} from '@angular/core';
import {NotifyMessageService} from "../../../../services/notify-message.service";
import {Product} from "../../../../Models";
import {ProductHttpService} from "../../../../services/http/product-http.service";
import {ProductDeleteModalComponent} from "../product-delete-modal/product-delete-modal.component";
import {ProductDeleteServices} from "./product-delete.services";
import {ProductEditServices} from "./product-edit.services";
import {ProductInsertServices} from "./product-insert.services";
import {ProductNewModalComponent} from "../product-new-modal/product-new-modal.component";
import {ProductEditModalComponent} from "../product-edit-modal/product-edit-modal.component";

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    products : Array<Product> = [];

    pagination = {
        page : 1,
        totalItems: 0,
        itemsPerPage: 15
    }

    @ViewChild(ProductNewModalComponent) productNewModal: ProductNewModalComponent;
    @ViewChild(ProductEditModalComponent) productEditModal: ProductEditModalComponent;
    @ViewChild(ProductDeleteModalComponent) productDeleteModal: ProductDeleteModalComponent;

    productId: number;

    constructor(private productHttp: ProductHttpService
                ,
                private notifyMessage: NotifyMessageService,
                protected productInsertServices: ProductInsertServices,
                protected productEditServices: ProductEditServices,
                protected productDeleteServices: ProductDeleteServices){
        this.productInsertServices.productListComponente = this;
        this.productEditServices.productListComponente = this;
        this.productDeleteServices.productListComponente = this;
    }

    ngOnInit() {
        this.getProducts();
    }

    getProducts() {
        this.productHttp.list(this.pagination.page)
            .subscribe(response => {
                this.products = response.data;
                this.pagination.totalItems = response.meta.total;
                this.pagination.itemsPerPage = response.meta.per_page;
            })

    }

    pageChanged(page){
        this.pagination.page = page;
        this.getProducts();
    }

}

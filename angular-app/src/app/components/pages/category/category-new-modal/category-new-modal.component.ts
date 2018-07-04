<<<<<<< HEAD
import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {ModalComponent} from "../../../bootstrap/modal/modal.component";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
=======
import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalComponent} from "../../../bootstrap/modal/modal.component";
import {HttpClient} from "@angular/common/http";
>>>>>>> c1e6900706a07923a88a7961e2838fdabf045487

@Component({
  selector: 'category-new-modal',
  templateUrl: './category-new-modal.component.html',
  styleUrls: ['./category-new-modal.component.css']
})
export class CategoryNewModalComponent implements OnInit {

  category = {
        name: ''
    }

<<<<<<< HEAD
    @ViewChild(ModalComponent) modal: ModalComponent;

    @Output() onSucess: EventEmitter<any> = new EventEmitter<any>();
    @Output() onError: EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>();
=======
    @ViewChild(ModalComponent)
    modal: ModalComponent;

>>>>>>> c1e6900706a07923a88a7961e2838fdabf045487

    constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  submit(){
        const token = window.localStorage.getItem('token');
        this.http.post('http://localhost:8000/api/categories', this.category, {
            headers:{
                'Authorization': `Bearer ${token}`
            }
        })
            .subscribe((category) => {
<<<<<<< HEAD
                this.onSucess.emit(category);
                this.modal.hide();
//                this.getCategories();
            }, error => this.onError.emit(error));
=======
                console.log(category);
                this.modal.hide();
//                this.getCategories();
            });
>>>>>>> c1e6900706a07923a88a7961e2838fdabf045487
  }

  showModal(){
        this.modal.show();
    }

  hideModal($event: Event){
        // fazer algo quando o model foi fechado
        console.log($event);
  }
}

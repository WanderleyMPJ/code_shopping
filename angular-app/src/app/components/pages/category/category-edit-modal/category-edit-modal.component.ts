import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ModalComponent} from "../../../bootstrap/modal/modal.component";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'category-edit-modal',
  templateUrl: './category-edit-modal.component.html',
  styleUrls: ['./category-edit-modal.component.css']
})
export class CategoryEditModalComponent implements OnInit {

  category = {
      name: '',
      active: true
  }

  _categoryId: number;

  @ViewChild(ModalComponent) modal: ModalComponent;

  @Output() onSucess: EventEmitter<any> = new EventEmitter<any>();
  @Output() onError: EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>();

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  @Input()
  set categoryId(value){
    this._categoryId = value;
    if (this._categoryId){
        const token = window.localStorage.getItem('token');
        this.http.get<{data: any}>(`http://localhost:8000/api/categories/${value}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .subscribe((response) => this.category = response.data)
    }
  }

    submit(){
        const token = window.localStorage.getItem('token');
        this.http.put(`http://localhost:8000/api/categories/${this._categoryId}`, this.category, {
            headers:{
                'Authorization': `Bearer ${token}`
            }
        })
            .subscribe((category) => {
                this.onSucess.emit(category);
                this.modal.hide();
            }, error => this.onError.emit(error));
    }

  showModal(){
        this.modal.show();
  }

  hideModal($event: Event){
        // fazer algo quando o model foi fechado
        console.log($event);
  }

}

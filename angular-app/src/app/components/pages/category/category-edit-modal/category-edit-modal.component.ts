import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ModalComponent} from "../../../bootstrap/modal/modal.component";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'category-edit-modal',
  templateUrl: './category-edit-modal.component.html',
  styleUrls: ['./category-edit-modal.component.css']
})
export class CategoryEditModalComponent implements OnInit {

  category = {
        name: ''
  }

  _categoryId: number;

  @ViewChild(ModalComponent) modal: ModalComponent;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  @Input()
  set categoryId(value){
    if (value > 0){
        this._categoryId = value;
        const token = window.localStorage.getItem('token');
        this.http.get<{data: any}>(`http://localhost:8000/api/categories/${value}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .subscribe((response) => this.category = response.data)
    }
  }
  showModal(){
        this.modal.show();
  }

  hideModal($event: Event){
        // fazer algo quando o model foi fechado
        console.log($event);
  }

}

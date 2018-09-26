import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'category-search-form',
  templateUrl: './category-search-form.component.html',
  styleUrls: ['./category-search-form.component.css']
})
export class CategorySearchFormComponent implements OnInit {

  search = '';

  @Output()
  onSearch: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  submit(){ //o método submit é executado sempre que o usuário submeter o formulário
    //isso dispará o evento onSearch
      //o o chat-group-list está executando o evento
    this.onSearch.emit(this.search);
    return false;
  }

}

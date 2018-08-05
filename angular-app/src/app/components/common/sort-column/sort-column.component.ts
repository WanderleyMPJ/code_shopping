import {Component, Input, OnInit, HostListener} from '@angular/core';

@Component({
  selector: '[sortColumn]',
  templateUrl: './sort-column.component.html',
  styleUrls: ['./sort-column.component.css']
})
export class SortColumnComponent implements OnInit {

  @Input()
  sortColumn : {column: string, sort: string};
  @Input()
  columnName: string;

  constructor() { }

  ngOnInit() {
  }

  @HostListener('click')
  changeSort(){
    this.sortColumn.column = this.columnName;
    this.sortColumn.sort = this.sortColumn.sort === 'desc' ? 'asc' : 'desc';
  }

  showArrowDown(){
    return this.columnName === this.sortColumn.column && this.sortColumn.sort === 'desc';
  }

  showArrowUp(){
      return this.columnName === this.sortColumn.column && this.sortColumn.sort === 'asc';
  }
}

import {Component, Input, OnInit} from '@angular/core';

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

}

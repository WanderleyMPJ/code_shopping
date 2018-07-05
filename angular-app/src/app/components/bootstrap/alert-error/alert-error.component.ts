import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'alert-error',
  templateUrl: './alert-error.component.html',
  styleUrls: ['./alert-error.component.css']
})
export class AlertErrorComponent implements OnInit {

 @Input() show = false;

  constructor() { }

  ngOnInit() {
  }

  hide(){
      this.show = false;
  }

}

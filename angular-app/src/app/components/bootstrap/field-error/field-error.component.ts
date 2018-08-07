import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {validationMessage} from "../../../common/validation-message";

@Component({
  selector: 'field-error',
  templateUrl: './field-error.component.html',
  styleUrls: ['./field-error.component.css'],
  host: {
    'class': 'invalid-feedback'
  }
})
export class FieldErrorComponent implements OnInit {

  @Input()
  field: FormControl;

  constructor() { }

  ngOnInit() {
  }

  get errorKeys(){
    return Object.keys(this.field.errors);
  }

  get errors(){
    return this.field.errors;
  }

  showError(){
    return this.field.invalid && (this.field.dirty || this.field.touched);
  }

  getMessage(error){
    return validationMessage.getMessage(error, ['label']);
  }
}

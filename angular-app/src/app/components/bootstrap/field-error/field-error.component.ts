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
  @Input()
  messages;
  @Input()
  label : string;

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
    let replacetokens = [this.label];
    if(this.messages && this.messages.hasOwnProperty(error)){
      if(Array.isArray(this.messages[error])){
          replacetokens = replacetokens.concat(this.messages[error]);
      }else{
        replacetokens.push(this.messages[error])
      }
    }
    return validationMessage.getMessage(error, replacetokens);
  }
}

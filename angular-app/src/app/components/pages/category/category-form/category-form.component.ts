import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import fieldsOptions from './category-fields-options';

@Component({
  selector: 'category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {

  @Input()
  form: FormGroup;

  constructor(private ChangeRef: ChangeDetectorRef) {

  }

  ngOnInit() {
  }

  ngOnChanges(){
    // this.ChangeRef.detectChanges();
  }

  get fieldsOptions(): any{
    return fieldsOptions;
  }
}

import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import fieldsOptions from "./product-input-fields-options";

@Component({
  selector: 'product-input-form',
  templateUrl: './product-input-form.component.html',
  styleUrls: ['./product-input-form.component.css']
})
export class ProductInputFormComponent implements OnInit {

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

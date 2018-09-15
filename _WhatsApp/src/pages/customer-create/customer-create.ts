import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, TextInput} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@IonicPage()
@Component({
  selector: 'page-customer-create',
  templateUrl: 'customer-create.html',
})
export class CustomerCreatePage {

  form: FormGroup;

  @ViewChild('inputfilePhoto')
  inputFilePhoto: TextInput;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private formBuilder: FormBuilder) {
      this.form = this.formBuilder.group({
          name: ['', [Validators.required,Validators.maxLength(255)]],
          email: ['', [Validators.required,Validators.email,Validators.maxLength(255)]]
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerCreatePage');
  }

  submit(){

  }

  selectPhoto(){
    const nativeElement = this.inputFilePhoto.getElementRef().nativeElement;
    const inputFile = nativeElement.querySelector('input');
    inputFile.click();
  }

}

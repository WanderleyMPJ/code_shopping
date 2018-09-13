import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, TextInput} from 'ionic-angular';

/**
 * Generated class for the CustomerCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-customer-create',
  templateUrl: 'customer-create.html',
})
export class CustomerCreatePage {

  @ViewChild('inputfilePhoto')
  inputFilePhoto: TextInput;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerCreatePage');
  }

  selectPhoto(){
    const nativeElement = this.inputFilePhoto.getElementRef().nativeElement;
    const inputFile = nativeElement.querySelector('input');
    inputFile.click();
  }

}

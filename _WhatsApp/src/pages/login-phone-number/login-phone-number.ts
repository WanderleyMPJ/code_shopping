import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'firebase';
import * as firebaseui from 'firebaseui';
import firebaseConfig from '../../app/firebase-config';
import scriptjs from 'scriptjs';
import {FirebaseAuthProvider} from "../../providers/auth/firebase-auth";

declare const firebraseui;
(<any>window).firebase = firebase;

@IonicPage()
@Component({
  selector: 'page-login-phone-number',
  templateUrl: 'login-phone-number.html',
})
export class LoginPhoneNumberPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private firebaseAuth : FirebaseAuthProvider) {
  }

  ionViewDidLoad() {
     this.firebaseAuth.makePhoneNumberForm('#firebase-ui');
  }

}

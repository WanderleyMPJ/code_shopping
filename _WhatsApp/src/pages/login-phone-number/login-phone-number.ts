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
     const promise = this.firebaseAuth.getFirebaseUI();
     promise.then( () => {
       console.log('sudesso da promessa');
     })
    // scriptjs('https://www.gstatic.com/firebasejs/ui/3.4.0/firebase-ui-auth__pt.js', () => {
    //     firebase.initializeApp(firebaseConfig);
    //     const uiConfig = {
    //         signInOptions: [
    //             firebase.auth.PhoneAuthProvider.PROVIDER_ID
    //         ]
    //     }
    //     const ui = new firebaseui.auth.AuthUI(firebase.auth());
    //     ui.start('#firebase-ui',uiConfig);
    // });
  }

}

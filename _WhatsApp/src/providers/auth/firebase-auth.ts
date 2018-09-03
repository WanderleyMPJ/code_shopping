import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import firebaseConfig from '../../app/firebase-config';
import * as firebaseui from 'firebaseui';
import scriptjs from 'scriptjs';
declare const firebraseui;
(<any>window).firebase = firebase;


@Injectable()
export class FirebaseAuthProvider {

  constructor(public http: HttpClient) {
    console.log('Hello FirebaseAuthProvider Provider');
  }

  private getFirebaseUI(): Promise<any> {
      return new Promise((resolve, reject) =>{
          scriptjs('https://www.gstatic.com/firebasejs/ui/3.4.0/firebase-ui-auth__pt.js', () => {
            resolve(firebaseui)
          });
      });
  }

    // firebase.initializeApp(firebaseConfig);
    // const uiConfig = {
    //     signInOptions: [
    //         firebase.auth.PhoneAuthProvider.PROVIDER_ID
    //     ]
    // }
    // const ui = new firebaseui.auth.AuthUI(firebase.auth());
    // ui.start('#firebase-ui',uiConfig);

}
